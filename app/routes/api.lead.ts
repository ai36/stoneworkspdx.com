import { MAX_PHOTO_FILES, MAX_PHOTO_SIZE_BYTES } from "@/assets/constants";

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return new Response(JSON.stringify({ error: "Server is not configured" }), {
      status: 500,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  let fd: FormData;
  try {
    fd = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid form data" }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  const fullName = String(fd.get("fullName") || "");
  const phone = String(fd.get("phone") || "");
  const email = String(fd.get("email") || "");
  const cityZip = String(fd.get("cityZip") || "");
  const serviceType = String(fd.get("serviceType") || "");
  const projectDescription = String(fd.get("projectDescription") || "");
  const preferredContact = String(fd.get("preferredContact") || "");

  const photos = fd.getAll("photos").filter((x) => x instanceof File) as File[];

  if (photos.length > MAX_PHOTO_FILES) {
    return new Response(JSON.stringify({ error: `Too many files. Max is ${MAX_PHOTO_FILES}.` }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  for (const f of photos) {
    if (f.size > MAX_PHOTO_SIZE_BYTES) {
      return new Response(JSON.stringify({ error: `File "${f.name}" is larger than 5MB.` }), {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }
    if (!f.type.startsWith("image/")) {
      return new Response(JSON.stringify({ error: `File "${f.name}" is not an image.` }), {
        status: 400,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }
  }

  const text =
    `🧱 New Lead\n\n` +
    `👤 Name: ${fullName}\n` +
    `📞 Phone: ${phone}\n` +
    `✉️ Email: ${email}\n` +
    `📍 City/ZIP: ${cityZip}\n` +
    `🛠 Service: ${serviceType}\n` +
    `📬 Preferred: ${preferredContact}\n\n` +
    `📝 Description:\n${projectDescription}\n\n` +
    `📷 Photos: ${photos.length}`;

  const apiBase = `https://api.telegram.org/bot${token}`;

  // 1) sendMessage
  const msgRes = await fetch(`${apiBase}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!msgRes.ok) {
    const details = await msgRes.text().catch(() => "");
    return new Response(JSON.stringify({ error: "Telegram sendMessage failed", details }), {
      status: 502,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  // 2) sendMediaGroup (optional)
  if (photos.length > 0) {
    const tgFd = new FormData();
    const media = photos.map((_, i) => ({ type: "photo", media: `attach://photo${i}` }));

    tgFd.append("chat_id", chatId);
    tgFd.append("media", JSON.stringify(media));
    photos.forEach((file, i) => tgFd.append(`photo${i}`, file, file.name));

    const mediaRes = await fetch(`${apiBase}/sendMediaGroup`, {
      method: "POST",
      body: tgFd,
    });

    if (!mediaRes.ok) {
      const details = await mediaRes.text().catch(() => "");
      return new Response(JSON.stringify({ error: "Telegram sendMediaGroup failed", details }), {
        status: 502,
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

// (необязательно) чтобы GET не работал и не пытался рендерить страницу:
export function loader() {
  return new Response("Not Found", { status: 404 });
}
