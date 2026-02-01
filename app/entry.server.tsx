import { PassThrough } from "node:stream";

import type { EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";

/**
 * Сколько ждать settle промисов (loader/action/await) в streaming-режиме,
 * после чего “обрубать” оставшиеся ожидания.
 */
export const streamTimeout = 10000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  return new Promise<Response>((resolve, reject) => {
    let shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        onShellReady() {
          shellRendered = true;

          responseHeaders.set("Content-Type", "text/html; charset=utf-8");

          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },

        onShellError(error: unknown) {
          // Ошибка до того, как отрендерили shell — можно safely отклонить promise
          reject(error);
        },

        onError(error: unknown) {
          // Ошибки после shell уже не могут “сломать” ответ (он уже начат),
          // но полезно логировать. Не переопределяем статус, если shell уже ушёл.
          if (!shellRendered) {
            reject(error);
          } else {
            // eslint-disable-next-line no-console
            console.error(error);
          }
        },
      }
    );

    // Abort чуть позже streamTimeout, чтобы успели “протечь” rejected boundary
    setTimeout(abort, streamTimeout + 1000);
  });
}
