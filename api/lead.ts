import { MAX_PHOTO_FILES, MAX_PHOTO_SIZE_BYTES } from "../src/assets/constants";

export const config = { runtime: "edge" };

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

export default async function handler(req: Request) {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return json(500, { error: "Server is not configured" });

  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return json(400, { error: "Invalid form data" });
  }

  const fullName = String(fd.get("fullName") || "");
  const phone = String(fd.get("phone") || "");
  const email = String(fd.get("email") || "");
  const cityZip = String(fd.get("cityZip") || "");
  const serviceType = String(fd.get("serviceType") || "");
  const projectDescription = String(fd.get("projectDescription") || "");
  const preferredContact = String(fd.get("preferredContact") || "");

  const photos = fd.getAll("photos").filter((x) => x instanceof File) as File[];

  // Серверные лимиты (их нельзя обходить)
  if (photos.length > MAX_PHOTO_FILES) {
    return json(400, { error: `Too many files. Max is ${MAX_PHOTO_FILES}.` });
  }
  for (const f of photos) {
    if (f.size > MAX_PHOTO_SIZE_BYTES) {
      return json(400, { error: `File "${f.name}" is larger than 5MB.` });
    }
    if (!f.type.startsWith("image/")) {
      return json(400, { error: `File "${f.name}" is not an image.` });
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

  // 1) отправляем текст
  const msgRes = await fetch(`${apiBase}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!msgRes.ok) {
    const errText = await msgRes.text().catch(() => "");
    return json(502, { error: "Telegram sendMessage failed", details: errText });
  }

  // 2) отправляем фото альбомом (если есть)
  if (photos.length > 0) {
    const tgFd = new FormData();

    const media = photos.map((_, i) => ({
      type: "photo",
      media: `attach://photo${i}`,
    }));

    tgFd.append("chat_id", chatId);
    tgFd.append("media", JSON.stringify(media));

    photos.forEach((file, i) => {
      tgFd.append(`photo${i}`, file, file.name);
    });

    const mediaRes = await fetch(`${apiBase}/sendMediaGroup`, {
      method: "POST",
      body: tgFd,
    });

    if (!mediaRes.ok) {
      const errText = await mediaRes.text().catch(() => "");
      return json(502, { error: "Telegram sendMediaGroup failed", details: errText });
    }
  }

  return json(200, { ok: true });
}
