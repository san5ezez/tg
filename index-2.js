var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));

// src/index.js
var FIELDS = ["g2g_code_id", "account_id", "password", "character_id", "secret_question", "secret_answer", "first_name", "last_name", "account_country", "date_of_birth", "account_email", "email_password", "additional_note"];
var ST = ["grey", "green", "yellow", "blue", "black"];
var ICO = { grey: "⚪", green: "🟢", yellow: "🟡", blue: "🔵", black: "⚫", orange: "🟡" };
var LBL = { grey: "Нулёвка (не брался)", green: "В аренде", yellow: "Кулдаун", blue: "Был кулдаун", black: "Бан", orange: "Кулдаун" };
var TAGL = /* @__PURE__ */ __name((s) => (ICO[s] || "") + " " + (LBL[s] || s), "TAGL");
var ru = /* @__PURE__ */ __name((s) => String(s ?? "").replace(/grey|green|yellow|blue|black|orange/g, (m) => LBL[m]), "ru");
var CD = [["20 часов", 72e3], ["Неделя", 604800], ["Месяц", 2592e3], ["Год", 31536e3]];
var PAGE = 8;
var LICENSE_URL = "https://tg-accounts-bot.dexter-craft-boss.workers.dev/license";
var DEF = {
  day_limit: "5",
  week_limit: "20",
  price_day: "не указана",
  price_week: "не указана",
  support_contact: "@flight_san",
  support_text: "🛟 Наша поддержка: @flight_san\nПо вопросам доступа, оплаты и сброса лимитов пишите туда.",
  welcome_text: "👋 Привет! Я помогу найти доступный аккаунт.\n\nСейчас у вас ещё нет доступа к боту. Напишите в поддержку — администратор подскажет, как его получить.\n\nВаш Telegram ID: {id}",
  bot_menu_text: "👋 Рад вас видеть! Выберите нужное действие ниже — я помогу найти аккаунт, показать ваши активные аккаунты или подсказать по лимитам.",
  bot_find_text: "🎲 Я сам выберу случайный доступный аккаунт. Вам не нужно разбираться в статусах и тегах.",
  bot_empty_text: "😔 Сейчас свободных аккаунтов нет. Попробуйте немного позже или напишите в поддержку — мы постараемся помочь.",
  bot_limit_text: "⏳ Похоже, дневной или недельный лимит уже использован. Можно дождаться автоматического сброса или обратиться в поддержку."
};
var LICENSE_TEXT = `ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ И УСЛОВИЯ ИСПОЛЬЗОВАНИЯ

Дата редакции: 18 октября 2026 года.

Пожалуйста, внимательно прочитайте этот документ. Он регулирует использование Telegram-бота, веб-сайта, панели администратора и связанных с ними материалов. Если вы не согласны хотя бы с одним пунктом, не нажимайте кнопку «Принять» и не используйте бота.

1. ОСНОВНЫЕ ПОНЯТИЯ

1.1. «Администрация» — владелец, оператор и уполномоченные им лица, которые управляют ботом, сайтом, доступами, базой пользователей и размещёнными материалами.

1.2. «Пользователь» — любое лицо, которое пишет боту, использует сайт или получает доступ к функциям проекта.

1.3. «Донат» или «пожертвование» — добровольная передача денежных средств проекту без обязанности администрации предоставить конкретный товар, аккаунт, результат, срок работы или иной гарантированный объём услуг.

1.4. «Доступ» — право пользоваться ботом или отдельными его функциями в течение срока и на условиях, которые определяет администрация.

2. ДОБРОВОЛЬНЫЙ ДОНАТ И ДОСТУП

2.1. Все платежи проекту являются добровольными пожертвованиями на поддержку проекта, его работы, инфраструктуры и развития. Платёж не является покупкой аккаунта, лицензии на сторонний сервис, гарантии результата или бессрочного доступа.

2.2. Доступ к боту может предоставляться администрацией как знак благодарности за донат. Сам факт доната не создаёт у пользователя безусловного права на доступ, конкретный аккаунт, определённые характеристики, количество выдач или сохранение доступа на заранее установленный срок.

2.3. Размер, способ, порядок и условия доната могут сообщаться отдельно через поддержку. Администрация вправе изменять условия предоставления доступа, лимиты, функциональность, правила использования и порядок поддержки.

2.4. Если доступ был прекращён, ограничен или пользователь удалён из списка, это само по себе не означает признание администрацией обязанности вернуть донат. Возвраты, если администрация вообще принимает решение их осуществлять, рассматриваются индивидуально и не являются гарантированными.

3. ОГРАНИЧЕНИЯ И ОТСУТСТВИЕ ГАРАНТИЙ

3.1. Бот, сайт и все материалы предоставляются «как есть» и «по мере доступности». Администрация не гарантирует бесперебойную, безошибочную, безопасную или постоянную работу проекта.

3.2. Администрация не гарантирует наличие свободных аккаунтов, их количество, качество, работоспособность, сохранность, доступность сторонних сервисов, отсутствие блокировок, восстановление доступа, срок службы или пригодность аккаунта для конкретной цели.

3.3. Администрация не гарантирует, что бот будет доступен в любое время, что сообщения будут доставлены, что данные не будут потеряны, а ошибки или технические сбои будут исправлены в определённый срок.

3.4. Функции, лимиты, состав материалов, формат выдачи и внешний вид проекта могут изменяться без предварительного уведомления.

4. ОТВЕТСТВЕННОСТЬ ПОЛЬЗОВАТЕЛЯ

4.1. Пользователь самостоятельно отвечает за законность своих действий, использование полученной информации, соблюдение законодательства, правил Telegram и правил любых сторонних сервисов.

4.2. Пользователь обязан самостоятельно оценивать риски использования любых выданных данных и не должен передавать доступ третьим лицам, использовать его для мошенничества, нарушения прав других лиц, обхода ограничений, спама, взлома или иной незаконной деятельности.

4.3. Пользователь несёт ответственность за сохранность полученных данных и за все действия, совершённые с его Telegram-аккаунта и с использованием предоставленного ему доступа.

4.4. Если пользователь передал доступ третьему лицу, нарушил правила проекта или использовал материалы незаконно, администрация вправе немедленно прекратить доступ без компенсации и без отдельного предупреждения.

5. ОТВЕТСТВЕННОСТЬ АДМИНИСТРАЦИИ

5.1. Администрация не несёт ответственности за любые прямые, косвенные, случайные, последующие или иные убытки, упущенную выгоду, потерю данных, блокировки, простой, невозможность использовать аккаунт, действия третьих лиц, действия Telegram и других сервисов, а также за последствия использования материалов проекта.

5.2. Администрация не отвечает за содержание, действия, доступность, изменения правил или решения сторонних платформ и сервисов. Администрация не может гарантировать, что сторонний сервис не изменит правила, не заблокирует аккаунт или не ограничит доступ.

5.3. Администрация не является продавцом аккаунтов или представителем сторонних сервисов, если иное прямо не указано отдельно. Пользователь принимает на себя все риски, связанные с использованием любых сторонних ресурсов.

5.4. Администрация не несёт ответственности за убытки и последствия, возникшие из-за неправильного использования бота, передачи данных третьим лицам, действий самого пользователя, технических работ, сбоев связи, блокировок, действий злоумышленников, форс-мажора или изменения законодательства.

5.5. В максимально допустимой законом степени администрация не обязана возмещать пользователю какие-либо расходы, потери или ущерб, связанные с использованием проекта или невозможностью его использования.

6. УДАЛЕНИЕ И БЛОКИРОВКА ПОЛЬЗОВАТЕЛЕЙ

6.1. Администратор вправе в любое время и по своему усмотрению удалить пользователя из списка, заблокировать его, ограничить отдельные функции, отменить доступ или прекратить обслуживание.

6.2. Администратор может сделать это без указания причины, без предварительного уведомления и без обязанности сообщать пользователю причину принятого решения. Пользователь заранее соглашается с этим условием.

6.3. Основанием может быть любое обстоятельство, включая подозрение на нарушение правил, жалобы, риск для проекта, спорную ситуацию, техническую необходимость, решение администрации или отсутствие необходимости продолжать доступ. При этом администрация не обязана раскрывать конкретное основание.

6.4. Повторная выдача доступа после удаления или блокировки не гарантируется.

7. КОНФИДЕНЦИАЛЬНОСТЬ И ДАННЫЕ

7.1. Для работы проекта могут обрабатываться Telegram ID, имя пользователя, username, сведения о действиях в боте, статистика использования, история выдачи и технические данные.

7.2. Пользователь не должен отправлять боту лишние персональные данные, платёжные реквизиты, пароли от личных аккаунтов и другую информацию, если это прямо не требуется для работы функции.

7.3. Администрация принимает разумные меры для защиты данных, однако не гарантирует абсолютную безопасность информации при использовании интернета, Telegram, хостинга и сторонних сервисов.

8. ИНТЕЛЛЕКТУАЛЬНЫЕ ПРАВА

8.1. Код, тексты, дизайн, логотипы, структура бота, сайт и иные материалы проекта принадлежат администрации или используются на законных основаниях.

8.2. Запрещается копировать, продавать, перепродавать, распространять, изменять, декомпилировать или использовать материалы проекта в коммерческих целях без предварительного разрешения администрации.

9. ИЗМЕНЕНИЕ СОГЛАШЕНИЯ

9.1. Администрация вправе изменять настоящее соглашение в любое время. Новая редакция может быть опубликована на сайте или показана в боте.

9.2. Продолжение использования бота после публикации новой редакции означает согласие с изменениями. Если пользователь не согласен с новой редакцией, он должен прекратить использование проекта.

10. ПРИНЯТИЕ СОГЛАШЕНИЯ

10.1. Нажимая кнопку «Принять соглашение», пользователь подтверждает, что прочитал текст, понял его содержание, согласен с ним и принимает все перечисленные условия.

10.2. Если пользователь не принимает соглашение, ему запрещается использовать функции бота. В этом случае доступ не предоставляется или прекращается.

10.3. Если отдельное положение будет признано недействительным, остальные положения сохраняют силу в максимально допустимой законом степени.

Используя бота или сайт, пользователь подтверждает своё согласие с настоящим соглашением и принимает на себя все связанные с использованием проекта риски.`;
var CFG_KEYS = [["day_limit", "Лимит в сутки"], ["week_limit", "Лимит в неделю"], ["price_day", "Цена сброса суток"], ["price_week", "Цена сброса недели"], ["support_contact", "Контакт поддержки"], ["support_text", "Текст поддержки"], ["welcome_text", "Текст для чужих"], ["bot_menu_text", "Приветствие в меню"], ["bot_find_text", "Подсказка поиска"], ["bot_empty_text", "Текст при отсутствии аккаунтов"], ["bot_limit_text", "Текст при лимите"]];
var now = /* @__PURE__ */ __name(() => Math.floor(Date.now() / 1e3), "now");
var esc = /* @__PURE__ */ __name((s) => String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]), "esc");
var shown = /* @__PURE__ */ __name((s) => String(s ?? "").replace(/^'+/, ""), "shown");
var json = /* @__PURE__ */ __name((o, s = 200, h = {}) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", ...h } }), "json");
var isSuper = /* @__PURE__ */ __name((env, id) => String(id) === String(env.SUPERADMIN_ID), "isSuper");
var dt = /* @__PURE__ */ __name((ts) => ts ? new Date(ts * 1e3).toISOString().slice(0, 16).replace("T", " ") : "—", "dt");
var left = /* @__PURE__ */ __name((ts) => {
  const s = ts - now();
  if (s <= 0) return "сейчас";
  const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60);
  return "через " + (h ? h + " ч " : "") + m + " мин";
}, "left");
function parseCSV(t) {
  t = t.replace(/^﻿/, "");
  const first = t.split(/\r?\n/)[0] || "";
  const cnt = /* @__PURE__ */ __name((c) => first.split(c).length, "cnt");
  const d = cnt("	") > Math.max(cnt(","), cnt(";")) ? "	" : cnt(";") > cnt(",") ? ";" : ",";
  const rows = [];
  let r = [], f = "", q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) {
      if (c === '"') {
        if (t[i + 1] === '"') {
          f += '"';
          i++;
        } else q = false;
      } else f += c;
    } else if (c === '"') q = true;
    else if (c === d) {
      r.push(f);
      f = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && t[i + 1] === "\n") i++;
      r.push(f);
      f = "";
      rows.push(r);
      r = [];
    } else f += c;
  }
  if (f !== "" || r.length) {
    r.push(f);
    rows.push(r);
  }
  return rows.filter((x) => x.some((y) => y.trim() !== ""));
}
__name(parseCSV, "parseCSV");
var csvCell = /* @__PURE__ */ __name((v) => {
  v = v == null ? "" : String(v);
  return /[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
}, "csvCell");
async function importCSV(env, text, adminId) {
  let rows = parseCSV(text);
  if (rows.length < 2) return { error: "Файл пуст" };
  const norm = /* @__PURE__ */ __name((h) => h.trim().toLowerCase().replace(/^﻿/, "").replace(/[\s\-.]+/g, "_").replace(/[^a-z0-9_]/g, ""), "norm");
  const ALIAS = { g2g_code: "g2g_code_id", g2g_id: "g2g_code_id", g2gcodeid: "g2g_code_id", accountid: "account_id", account: "account_id", login: "account_id", pass: "password", char_id: "character_id", characterid: "character_id", country: "account_country", dob: "date_of_birth", birth_date: "date_of_birth", email: "account_email", mail: "account_email", email_pass: "email_password", mail_password: "email_password", note: "additional_note", notes: "additional_note" };
  const map = /* @__PURE__ */ __name((h) => {
    const n = norm(h);
    return ALIAS[n] || n;
  }, "map");
  const hi = rows.slice(0, 5).findIndex((r) => r.filter((h) => FIELDS.includes(map(h))).length >= 2);
  if (hi < 0) return { error: "Не нашёл заголовки. Первая строка файла: " + rows[0].slice(0, 15).join(" | ") };
  const head = rows[hi].map(map);
  rows = rows.slice(hi);
  const idx = FIELDS.map((f) => head.indexOf(f));
  const { results } = await env.DB.prepare("SELECT id,account_id,g2g_code_id FROM accounts").all();
  const byA = /* @__PURE__ */ new Map(), byG = /* @__PURE__ */ new Map();
  for (const r of results) {
    if (r.account_id) byA.set(r.account_id, r.id);
    if (r.g2g_code_id) byG.set(r.g2g_code_id, r.id);
  }
  const seen = /* @__PURE__ */ new Set();
  const st = [];
  let added = 0, updated = 0, skipped = 0;
  const upd = "UPDATE accounts SET " + FIELDS.map((f) => f + "=COALESCE(?," + f + ")").join(",") + ",updated_at=CURRENT_TIMESTAMP WHERE id=?";
  const ins = "INSERT INTO accounts(" + FIELDS.join(",") + ") VALUES(" + FIELDS.map(() => "?").join(",") + ")";
  for (const row of rows.slice(1)) {
    const v = idx.map((i) => {
      if (i < 0) return null;
      const x = (row[i] ?? "").trim();
      return x === "" || x.toUpperCase() === "NULL" ? null : x;
    });
    const gid = v[0], aid = v[1];
    if (v.every((x) => x === null)) {
      skipped++;
      continue;
    }
    if (aid && seen.has("a" + aid) || gid && seen.has("g" + gid)) {
      skipped++;
      continue;
    }
    if (aid) seen.add("a" + aid);
    if (gid) seen.add("g" + gid);
    const id = aid && byA.get(aid) || gid && byG.get(gid);
    if (id) {
      st.push(env.DB.prepare(upd).bind(...v, id));
      updated++;
    } else {
      st.push(env.DB.prepare(ins).bind(...v));
      added++;
    }
  }
  for (let i = 0; i < st.length; i += 80) await env.DB.batch(st.slice(i, i + 80));
  await env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(adminId, "import", `+${added} ~${updated} skip ${skipped}`).run();
  return { added, updated, skipped };
}
__name(importCSV, "importCSV");
async function exportCSV(env, status) {
  const [w, p] = where(status && status !== "all" ? { status } : {});
  const { results } = await env.DB.prepare("SELECT * FROM accounts" + w + " ORDER BY id").bind(...p).all();
  const cols = [...FIELDS, "status", "tags", "vac_until", "holder_id"];
  const out = [cols.join(",")];
  for (const r of results) out.push(cols.map((c) => csvCell(c === "vac_until" && r[c] ? new Date(r[c] * 1e3).toISOString() : r[c])).join(","));
  return out.join("\r\n");
}
__name(exportCSV, "exportCSV");
async function cfg(env) {
  const { results } = await env.DB.prepare("SELECT k,v FROM settings").all();
  const o = { ...DEF };
  for (const r of results) if (r.k in DEF) o[r.k] = r.v;
  return o;
}
__name(cfg, "cfg");
async function demoMode(env) {
  return (await env.DB.prepare("SELECT v FROM settings WHERE k='demo_mode'").first())?.v === "1";
}
__name(demoMode, "demoMode");
async function setDemoMode(env, enabled, by) {
  await env.DB.batch([
    env.DB.prepare("INSERT OR REPLACE INTO settings(k,v) VALUES('demo_mode',?)").bind(enabled ? "1" : "0"),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(by, "demo_mode", enabled ? "on" : "off")
  ]);
  return enabled;
}
__name(setDemoMode, "setDemoMode");
async function setCfg(env, k, v) {
  if (!(k in DEF)) return false;
  v = String(v ?? "").trim();
  if (k.endsWith("_limit")) {
    if (!/^\d{1,4}$/.test(v) || +v < 1) return false;
  }
  if (!v) return false;
  await env.DB.prepare("INSERT OR REPLACE INTO settings(k,v) VALUES(?,?)").bind(k, v.slice(0, 2e3)).run();
  return true;
}
__name(setCfg, "setCfg");
function where(f) {
  const w = [], p = [];
  if (f.id) {
    w.push("id=?");
    p.push(f.id);
  }
  if (f.status) {
    w.push("status=?");
    p.push(f.status);
  }
  if (f.holder) {
    w.push("holder_id=?");
    p.push(f.holder);
  }
  if (f.tag) {
    w.push("EXISTS(SELECT 1 FROM json_each(accounts.tags) WHERE value=?)");
    p.push(f.tag);
  }
  if (f.q) {
    const cs = ["account_id", "g2g_code_id", "account_email", "first_name", "last_name", "character_id", "additional_note"];
    w.push("(" + cs.map((c) => c + " LIKE ?").join(" OR ") + ")");
    cs.forEach(() => p.push("%" + f.q + "%"));
  }
  return [w.length ? " WHERE " + w.join(" AND ") : "", p];
}
__name(where, "where");
async function listAccounts(env, f, page, size = PAGE) {
  const [w, p] = where(f);
  const total = (await env.DB.prepare("SELECT COUNT(*) c FROM accounts" + w).bind(...p).first()).c;
  const { results } = await env.DB.prepare("SELECT * FROM accounts" + w + " ORDER BY id DESC LIMIT ? OFFSET ?").bind(...p, size, page * size).all();
  return { total, rows: results };
}
__name(listAccounts, "listAccounts");
async function accById(env, id) {
  return env.DB.prepare("SELECT * FROM accounts WHERE id=?").bind(id).first();
}
__name(accById, "accById");
function parseDur(s) {
  if (typeof s === "number") return s > 0 ? s : 0;
  const m = /^\s*(\d+)\s*([dhдч])/i.exec(s || "");
  if (!m) return 0;
  return +m[1] * (/[dд]/i.test(m[2]) ? 86400 : 3600);
}
__name(parseDur, "parseDur");
async function setStatus(env, id, status, by, sec) {
  if (!ST.includes(status)) return false;
  const o = await env.DB.prepare("SELECT status FROM accounts WHERE id=?").bind(id).first();
  if (!o) return false;
  if (status === "yellow" && !sec) return false;
  const vac = status === "yellow" ? now() + sec : null;
  const clear = ["grey", "blue", "black"].includes(status) ? 1 : 0;
  const action = status === "yellow" ? "cooldown" : "status";
  await env.DB.batch([
    env.DB.prepare("UPDATE accounts SET status=?,vac_until=?,holder_id=CASE WHEN ?=1 THEN NULL ELSE holder_id END,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(status, vac, clear, id),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action,old_value,new_value) VALUES(?,?,?,?,?)").bind(by, id, action, o.status, status + (vac ? " до " + dt(vac) : ""))
  ]);
  return true;
}
__name(setStatus, "setStatus");
async function extendVac(env, id, by) {
  const r = await env.DB.prepare("UPDATE accounts SET vac_until=COALESCE(vac_until,?)+86400,updated_at=CURRENT_TIMESTAMP WHERE id=? AND status='yellow'").bind(now(), id).run();
  if (r.meta.changes) await env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action,new_value) VALUES(?,?,?,?)").bind(by, id, "extend", "+1 день").run();
  return !!r.meta.changes;
}
__name(extendVac, "extendVac");
async function setNote(env, id, note, by) {
  await env.DB.batch([
    env.DB.prepare("UPDATE accounts SET additional_note=?,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(note || null, id),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action) VALUES(?,?,?)").bind(by, id, "note")
  ]);
}
__name(setNote, "setNote");
async function delAccount(env, id, by) {
  await env.DB.batch([
    env.DB.prepare("DELETE FROM accounts WHERE id=?").bind(id),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action) VALUES(?,?,?)").bind(by, id, "delete")
  ]);
}
__name(delAccount, "delAccount");
async function setTags(env, id, str, by) {
  const tags = [...new Set(String(str).split(",").map((s) => s.trim()).filter(Boolean).map((s) => s.slice(0, 30)))].slice(0, 20);
  await env.DB.batch([
    env.DB.prepare("UPDATE accounts SET tags=?,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(JSON.stringify(tags), id),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action,new_value) VALUES(?,?,?,?)").bind(by, id, "tags", tags.join(", "))
  ]);
}
__name(setTags, "setTags");
var randomAcc = /* @__PURE__ */ __name((env, status) => env.DB.prepare("SELECT * FROM accounts WHERE status=? ORDER BY RANDOM() LIMIT 1").bind(status).first(), "randomAcc");
async function stats(env) {
  const { results } = await env.DB.prepare("SELECT status,COUNT(*) c FROM accounts GROUP BY status").all();
  const o = Object.fromEntries(ST.map((s) => [s, 0]));
  for (const r of results) if (r.status in o) o[r.status] = r.c;
  o.soon = (await env.DB.prepare("SELECT COUNT(*) c FROM accounts WHERE status='yellow' AND vac_until<=?").bind(now() + 86400).first()).c;
  o.users = (await env.DB.prepare("SELECT COUNT(*) c FROM admins").first()).c;
  o.takes24 = (await env.DB.prepare("SELECT COUNT(*) c FROM takes WHERE taken_at>?").bind(now() - 86400).first()).c;
  return o;
}
__name(stats, "stats");
var getUser = /* @__PURE__ */ __name((env, id) => env.DB.prepare("SELECT * FROM admins WHERE telegram_id=?").bind(id).first(), "getUser");
async function roleOf(env, id) {
  if (isSuper(env, id)) return await demoMode(env) ? "user" : "super";
  const u = await getUser(env, id);
  if (!u) return null;
  return u.blocked ? "blocked" : "user";
}
__name(roleOf, "roleOf");
var uname = /* @__PURE__ */ __name((f) => f.username ? "@" + f.username : [f.first_name, f.last_name].filter(Boolean).join(" "), "uname");
async function touch(env, f) {
  if (isSuper(env, f.id)) return;
  await env.DB.prepare("UPDATE admins SET name=?,last_seen=? WHERE telegram_id=?").bind(uname(f), now(), f.id).run();
}
__name(touch, "touch");
async function addUser(env, tid, by) {
  if (!/^\d{4,15}$/.test(String(tid)) || isSuper(env, tid)) return false;
  await env.DB.batch([
    env.DB.prepare("INSERT OR IGNORE INTO admins(telegram_id,role,added_by) VALUES(?,'admin',?)").bind(+tid, by),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(by, "user_add", String(tid))
  ]);
  return true;
}
__name(addUser, "addUser");
async function delUser(env, tid, by) {
  if (isSuper(env, tid)) return false;
  await env.DB.batch([
    env.DB.prepare("DELETE FROM admins WHERE telegram_id=?").bind(+tid),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(by, "user_del", String(tid))
  ]);
  return true;
}
__name(delUser, "delUser");
async function setBlocked(env, tid, blocked, by) {
  await env.DB.batch([
    env.DB.prepare("UPDATE admins SET blocked=? WHERE telegram_id=?").bind(blocked ? 1 : 0, +tid),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(by, blocked ? "user_block" : "user_unblock", String(tid))
  ]);
}
__name(setBlocked, "setBlocked");
async function resetLimit(env, tid, kind, by) {
  const col = kind === "week" ? "week_reset" : "day_reset";
  await env.DB.batch([
    env.DB.prepare(`UPDATE admins SET ${col}=? WHERE telegram_id=?`).bind(now(), +tid),
    env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(by, "limit_reset", `${tid}: ${kind === "week" ? "неделя" : "сутки"}`)
  ]);
  await send(env, tid, `♻️ Ваш лимит ${kind === "week" ? "за неделю" : "за сутки"} сброшен. Можно брать аккаунты.`, [[B("🔍 Найти аккаунт", "fd")]]).catch(() => {
  });
}
__name(resetLimit, "resetLimit");
var USERS_SQL = /* @__PURE__ */ __name((w) => `SELECT a.telegram_id,a.name,a.blocked,a.last_seen,a.created_at,
 (SELECT COUNT(*) FROM takes t WHERE t.user_id=a.telegram_id) total,
 (SELECT COUNT(*) FROM takes t WHERE t.user_id=a.telegram_id AND t.taken_at>max(?1-86400,COALESCE(a.day_reset,0))) day,
 (SELECT COUNT(*) FROM takes t WHERE t.user_id=a.telegram_id AND t.taken_at>max(?1-604800,COALESCE(a.week_reset,0))) week,
 (SELECT COUNT(*) FROM accounts c WHERE c.holder_id=a.telegram_id AND c.status='green') hold,
 (SELECT COUNT(*) FROM audit_logs l WHERE l.admin_id=a.telegram_id AND l.action='cooldown') cds
 FROM admins a ${w} ORDER BY a.created_at`, "USERS_SQL");
var listUsers = /* @__PURE__ */ __name(async (env) => (await env.DB.prepare(USERS_SQL("")).bind(now()).all()).results, "listUsers");
var oneUser = /* @__PURE__ */ __name(async (env, id) => await env.DB.prepare(USERS_SQL("WHERE a.telegram_id=?2")).bind(now(), +id).first(), "oneUser");
async function usage(env, uid, S) {
  const u = await getUser(env, uid) || {};
  const t = now(), df = Math.max(t - 86400, u.day_reset || 0), wf = Math.max(t - 604800, u.week_reset || 0);
  const d = await env.DB.prepare("SELECT COUNT(*) c,MIN(taken_at) m FROM takes WHERE user_id=? AND taken_at>?").bind(uid, df).first();
  const w = await env.DB.prepare("SELECT COUNT(*) c,MIN(taken_at) m FROM takes WHERE user_id=? AND taken_at>?").bind(uid, wf).first();
  return { day: d.c, week: w.c, dayLimit: +S.day_limit, weekLimit: +S.week_limit, dayFree: d.m ? d.m + 86400 : null, weekFree: w.m ? w.m + 604800 : null };
}
__name(usage, "usage");
async function takeAnyAccount(env, uid) {
  const S = await cfg(env), us = await usage(env, uid, S);
  if (us.day >= us.dayLimit || us.week >= us.weekLimit) return { limit: true, us, S };
  for (let i = 0; i < 3; i++) {
    const a = await env.DB.prepare("SELECT id,status FROM accounts WHERE status IN ('grey','blue') ORDER BY RANDOM() LIMIT 1").first();
    if (!a) return { none: true };
    const r = await env.DB.prepare("UPDATE accounts SET status='green',holder_id=?,taken_at=?,vac_until=NULL,updated_at=CURRENT_TIMESTAMP WHERE id=? AND status=?").bind(uid, now(), a.id, a.status).run();
    if (r.meta.changes) {
      await env.DB.batch([
        env.DB.prepare("INSERT INTO takes(user_id,account_id,taken_at) VALUES(?,?,?)").bind(uid, a.id, now()),
        env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action,old_value,new_value) VALUES(?,?,?,?,?)").bind(uid, a.id, "take", a.status, "green")
      ]);
      return { id: a.id };
    }
  }
  return { none: true };
}
__name(takeAnyAccount, "takeAnyAccount");
var getSt = /* @__PURE__ */ __name(async (env, u, k) => (await env.DB.prepare("SELECT v FROM states WHERE user_id=? AND k=?").bind(u, k).first())?.v ?? null, "getSt");
var setSt = /* @__PURE__ */ __name((env, u, k, v) => env.DB.prepare("INSERT OR REPLACE INTO states(user_id,k,v) VALUES(?,?,?)").bind(u, k, v).run(), "setSt");
var delSt = /* @__PURE__ */ __name((env, u, k) => env.DB.prepare("DELETE FROM states WHERE user_id=? AND k=?").bind(u, k).run(), "delSt");
async function broadcast(env, text, by) {
  const us = (await env.DB.prepare("SELECT telegram_id FROM admins WHERE blocked=0").all()).results.slice(0, 40);
  let ok = 0;
  await Promise.all(us.map(async (u) => {
    try {
      const r = await send(env, u.telegram_id, "📢 " + esc(text));
      if (r.ok) ok++;
    } catch (e) {
    }
  }));
  await env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(by, "broadcast", `${ok}/${us.length}`).run();
  return { ok, total: us.length };
}
__name(broadcast, "broadcast");
async function cron(env) {
  const t = now();
  const { results } = await env.DB.prepare("SELECT id,holder_id FROM accounts WHERE status='yellow' AND vac_until IS NOT NULL AND vac_until<=?").bind(t).all();
  if (!results.length) return;
  await env.DB.batch([
    env.DB.prepare("INSERT INTO audit_logs(admin_id,account_id,action,old_value,new_value) SELECT 0,id,'status','yellow','blue (авто)' FROM accounts WHERE status='yellow' AND vac_until IS NOT NULL AND vac_until<=?").bind(t),
    env.DB.prepare("UPDATE accounts SET status='blue',vac_until=NULL,holder_id=NULL,updated_at=CURRENT_TIMESTAMP WHERE status='yellow' AND vac_until IS NOT NULL AND vac_until<=?").bind(t)
  ]);
  const by = {};
  for (const r of results) if (r.holder_id) (by[r.holder_id] ||= []).push(r.id);
  for (const [uid, ids] of Object.entries(by).slice(0, 25)) {
    try {
      await send(env, uid, `🔵 Кулдаун закончился у аккаунтов: ${ids.map((i) => "#" + i).join(" ")}. Они вернулись в общий пул.`, [[B("🔍 Найти аккаунт", "fd")]]);
    } catch (e) {
    }
  }
  try {
    await send(env, env.SUPERADMIN_ID, `🔵 Кулдаун закончился у <b>${results.length}</b> акк. — теперь «Был кулдаун».`, [[B("🔵 Открыть", "l:0:blue")]]);
  } catch (e) {
  }
}
__name(cron, "cron");
var tg = /* @__PURE__ */ __name((env, m, b) => fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${m}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(b) }).then((r) => r.json()), "tg");
var send = /* @__PURE__ */ __name((env, chat, text, kb, mid) => tg(env, mid ? "editMessageText" : "sendMessage", { chat_id: chat, message_id: mid, text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: kb ? { inline_keyboard: kb } : void 0 }), "send");
var B = /* @__PURE__ */ __name((text, data) => ({ text, callback_data: data }), "B");
var HOME = [B("🏠 Меню", "m")];
async function showMenu(env, chat, mid, uid) {
  if (isSuper(env, uid) && !await demoMode(env)) {
    const c = await stats(env);
    const kb2 = [
      [B("📋 Все", "l:0:all"), B("⚪ Нулёвки", "l:0:grey")],
      [B("🟢 В аренде", "l:0:green"), B("🟡 Кулдаун", "l:0:yellow")],
      [B("🔵 Был кулдаун", "l:0:blue"), B("⚫ Баны", "l:0:black")],
      [B("🎲 Случайный", "rm")],
      [B("🔎 Поиск", "srch"), B("🏷 Теги", "tags")],
      [B("👥 Пользователи", "us:0"), B("⚙️ Настройки", "cfg")],
      [B("📊 Статистика", "st"), B("📜 Аудит", "aud")],
      [B("⬇️ Экспорт", "exm"), B("📢 Рассылка", "bc")],
      [B("🛟 Поддержка", "sup")]
    ];
    return send(env, chat, `<b>Админ-меню</b>
⚪ Нулёвки: ${c.grey}
🟢 В аренде: ${c.green}
🟡 Кулдаун: ${c.yellow}
🔵 Был кулдаун: ${c.blue}
⚫ Баны: ${c.black}

Отправьте CSV-файл, чтобы импортировать.`, kb2, mid);
  }
  const S = await cfg(env), us = await usage(env, uid, S);
  const kb = [[B("🔍 Найти аккаунт", "fd")], [B("📦 Мои аккаунты", "my"), B("👤 Профиль", "pf")], [B("🛟 Поддержка", "sup")]];
  return send(env, chat, `<b>Меню</b>
${esc(S.bot_menu_text)}

Сегодня: <b>${us.day}/${us.dayLimit}</b> · За неделю: <b>${us.week}/${us.weekLimit}</b>`, kb, mid);
}
__name(showMenu, "showMenu");
function limitButtons(us, S) {
  const kb = [];
  if (us.day >= us.dayLimit) kb.push([B(`♻️ Сбросить сутки — ${S.price_day}`, "rs:day")]);
  if (us.week >= us.weekLimit) kb.push([B(`♻️ Сбросить неделю — ${S.price_week}`, "rs:week")]);
  return kb;
}
__name(limitButtons, "limitButtons");
async function showLimit(env, chat, mid, x) {
  const { us, S } = x;
  let t = "⛔ <b>Лимит исчерпан</b>\n" + esc(S.bot_limit_text) + "\n\n";
  t += `Сутки: ${us.day}/${us.dayLimit}` + (us.day >= us.dayLimit && us.dayFree ? ` (освободится ${left(us.dayFree)})` : "") + "\n";
  t += `Неделя: ${us.week}/${us.weekLimit}` + (us.week >= us.weekLimit && us.weekFree ? ` (освободится ${left(us.weekFree)})` : "") + "\n\nМожно дождаться или запросить сброс:";
  return send(env, chat, t, [...limitButtons(us, S), HOME], mid);
}
__name(showLimit, "showLimit");
async function showFind(env, chat, mid, uid) {
  const S = await cfg(env), us = await usage(env, uid, S);
  if (us.day >= us.dayLimit || us.week >= us.weekLimit) return showLimit(env, chat, mid, { us, S });
  const { results } = await env.DB.prepare("SELECT status,COUNT(*) c FROM accounts WHERE status IN ('grey','blue') GROUP BY status").all();
  const c = Object.fromEntries(results.map((r) => [r.status, r.c]));
  return send(env, chat, `🔍 <b>Найти аккаунт</b>
Осталось сегодня: ${us.dayLimit - us.day} · на неделе: ${us.weekLimit - us.week}

${esc(S.bot_find_text)}`, [
    [B(`🎲 Получить аккаунт (${(c.grey || 0) + (c.blue || 0)})`, "tk:any")],
    HOME
  ], mid);
}
__name(showFind, "showFind");
async function showLicense(env, chat, mid) {
  const buttons = [[B("✅ Принять соглашение", "lic:yes")], [B("❌ Не принимать", "lic:no")]];
  const text = `<b>📄 Лицензионное соглашение</b>

Перед использованием ознакомьтесь с полным текстом соглашения:
<a href="${LICENSE_URL}">Открыть лицензионное соглашение на сайте</a>

Нажимая «Принять соглашение», вы подтверждаете согласие со всеми условиями.`;
  return send(env, chat, text, buttons, mid);
}
__name(showLicense, "showLicense");
async function showProfile(env, chat, mid, uid) {
  const S = await cfg(env), us = await usage(env, uid, S), u = await oneUser(env, uid);
  let t = `<b>👤 Профиль</b>
ID: <code>${uid}</code>
Сегодня: ${us.day}/${us.dayLimit}` + (us.dayFree && us.day >= us.dayLimit ? ` (сброс ${left(us.dayFree)})` : "") + `
За неделю: ${us.week}/${us.weekLimit}` + (us.weekFree && us.week >= us.weekLimit ? ` (сброс ${left(us.weekFree)})` : "") + `
Всего взято: ${u?.total || 0}
Сейчас в аренде: ${u?.hold || 0}
Кулдаунов: ${u?.cds || 0}`;
  return send(env, chat, t, [...limitButtons(us, S), HOME], mid);
}
__name(showProfile, "showProfile");
async function showMy(env, chat, mid, uid) {
  const { results } = await env.DB.prepare("SELECT id,status,vac_until FROM accounts WHERE holder_id=? AND status IN ('green','yellow') ORDER BY taken_at DESC LIMIT 30").bind(uid).all();
  const kb = results.map((a) => [B(`${ICO[a.status]} #${a.id}` + (a.status === "yellow" ? " · кулдаун " + left(a.vac_until) : ""), "a:" + a.id)]);
  kb.push(HOME);
  return send(env, chat, results.length ? "📦 <b>Ваши аккаунты</b>" : "У вас нет аккаунтов в аренде.", kb, mid);
}
__name(showMy, "showMy");
async function showSupport(env, chat, mid) {
  const S = await cfg(env);
  return send(env, chat, esc(S.support_text) + "\n\nКонтакт: " + esc(S.support_contact), [HOME], mid);
}
__name(showSupport, "showSupport");
async function showCd(env, chat, mid, id, uid) {
  const kb = CD.map(([n, s]) => [B("🟡 " + n, `cd:${id}:${s}`)]);
  if (isSuper(env, uid) && !await demoMode(env)) kb.push([B("✏️ Свой срок", "cdx:" + id)]);
  kb.push([B("Отмена", "a:" + id)]);
  return send(env, chat, `На сколько кулдаун у аккаунта #${id}?`, kb, mid);
}
__name(showCd, "showCd");
async function fobj(env, uid, f) {
  if (ST.includes(f)) return { status: f };
  if (f.startsWith("t:")) return { tag: f.slice(2) };
  if (f === "q") {
    const q = await getSt(env, uid, "q");
    return /^#\d+$/.test(q || "") ? { id: +q.slice(1) } : { q };
  }
  return {};
}
__name(fobj, "fobj");
async function showList(env, chat, mid, uid, f, page) {
  const { total, rows } = await listAccounts(env, await fobj(env, uid, f), page);
  const pages = Math.max(1, Math.ceil(total / PAGE));
  const kb = rows.map((a) => [B((`${ICO[a.status]} #${a.id} ${a.account_id || a.g2g_code_id || a.account_email || ""}` + (a.holder_id ? " 👤" + a.holder_id : "")).slice(0, 60), "a:" + a.id)]);
  const nav = [];
  if (page > 0) nav.push(B("◀️", `l:${page - 1}:${f}`));
  if ((page + 1) * PAGE < total) nav.push(B("▶️", `l:${page + 1}:${f}`));
  if (nav.length) kb.push(nav);
  kb.push(HOME);
  return send(env, chat, `Найдено: <b>${total}</b> · стр. ${page + 1}/${pages}`, kb, mid);
}
__name(showList, "showList");
async function showCard(env, chat, mid, id, uid) {
  const a = await accById(env, id), sup = isSuper(env, uid) && !await demoMode(env);
  if (!a) return send(env, chat, "Не найдено", [HOME], mid);
  const own = a.holder_id === uid && (a.status === "green" || a.status === "yellow");
  if (!sup && !own) return send(env, chat, "⛔ Нет доступа к этому аккаунту", [HOME], mid);
  const L = sup ? ["g2g_code_id", "account_id", "password", "character_id", "secret_question", "secret_answer", "first_name", "last_name", "account_country", "date_of_birth", "additional_note"] : ["account_id", "password", "character_id", "secret_question", "secret_answer", "first_name", "last_name", "account_country", "date_of_birth"];
  let t = `<b>#${a.id}</b> · ${TAGL(a.status)}`;
  if (a.status === "yellow" && a.vac_until) t += `
⏳ кулдаун до ${dt(a.vac_until)} UTC (${left(a.vac_until)})`;
  if (sup && a.holder_id) t += `
👤 Держит: <code>${a.holder_id}</code>` + (a.taken_at ? " с " + dt(a.taken_at) : "");
  if (sup) {
    const tags = JSON.parse(a.tags || "[]");
    if (tags.length) t += "\n🏷 " + esc(tags.join(", "));
  }
  t += "\n\n";
  if (sup || a.status === "green") {
    for (const k of L) if (a[k]) t += `${k}: <code>${esc(shown(a[k]))}</code>
`;
    if (sup && (a.account_email || a.email_password)) {
      t += "\n📧 <b>Почта</b>\n";
      if (a.account_email) t += `<code>${esc(shown(a.account_email))}</code>
`;
      if (a.email_password) t += `<code>${esc(shown(a.email_password))}</code>
`;
    }
  } else t += "Данные скрыты, пока идёт кулдаун.";
  const kb = [];
  if (sup) {
    kb.push(
      [B("⚪ Нулёвка", `s:${id}:grey`), B("🟢 В аренде", `s:${id}:green`), B("🟡 Кулдаун", `s:${id}:yellow`)],
      [B("🔵 Был кулдаун", `s:${id}:blue`), B("⚫ Бан", `s:${id}:black`)],
      [B("🏷 Теги", "tg:" + id), B("📝 Заметка", "nt:" + id)]
    );
    const r4 = [B("🎲 Ещё случайный", "rnd:" + a.status)];
    if (a.status === "yellow") r4.push(B("⏱ +1 день", "xt:" + id));
    kb.push(r4);
    kb.push([B("⬅️ Список", "l:0:all"), B("🗑 Удалить", "dl:" + id)]);
  } else {
    if (a.status === "green") kb.push([B("🟡 Поставить кулдаун", "cdm:" + id)]);
    kb.push([B("⬅️ Мои аккаунты", "my")]);
  }
  return send(env, chat, t, kb, mid);
}
__name(showCard, "showCard");
async function showUsers(env, chat, mid, page) {
  const us = await listUsers(env), S = await cfg(env);
  const PS = 8, slice = us.slice(page * PS, page * PS + PS);
  const kb = slice.map((u) => [B(`${u.blocked ? "🚫" : "👤"} ${u.name || u.telegram_id} · ${u.day}/${S.day_limit} · ${u.week}/${S.week_limit}`.slice(0, 60), "u:" + u.telegram_id)]);
  const nav = [];
  if (page > 0) nav.push(B("◀️", "us:" + (page - 1)));
  if ((page + 1) * PS < us.length) nav.push(B("▶️", "us:" + (page + 1)));
  if (nav.length) kb.push(nav);
  kb.push([B("➕ Добавить пользователя", "adm_add")], HOME);
  return send(env, chat, `<b>Пользователи</b> (${us.length})
В кнопках: сегодня/лимит · неделя/лимит`, kb, mid);
}
__name(showUsers, "showUsers");
async function showUser(env, chat, mid, id) {
  const u = await oneUser(env, id), S = await cfg(env);
  if (!u) return send(env, chat, "Не найден", [[B("⬅️ Пользователи", "us:0")]], mid);
  const t = `<b>${u.blocked ? "🚫" : "👤"} ${esc(u.name || "—")}</b>
ID: <code>${u.telegram_id}</code>
Сегодня: ${u.day}/${S.day_limit}
Неделя: ${u.week}/${S.week_limit}
Всего взято: ${u.total}
Сейчас в аренде: ${u.hold}
Кулдаунов: ${u.cds}
Последняя активность: ${u.last_seen ? dt(u.last_seen) + " UTC" : "—"}
Добавлен: ${esc(u.created_at || "")}`;
  const { results } = await env.DB.prepare("SELECT id FROM accounts WHERE holder_id=? AND status='green' LIMIT 6").bind(id).all();
  const kb = results.map((a) => [B("🟢 Аккаунт #" + a.id, "a:" + a.id)]);
  kb.push([B("♻️ Сброс суток", `ur:${id}:day`), B("♻️ Сброс недели", `ur:${id}:week`)], [B(u.blocked ? "✅ Разблокировать" : "🚫 Заблокировать", "ub:" + id), B("🗑 Удалить", "ud:" + id)], [B("⬅️ Пользователи", "us:0")]);
  return send(env, chat, t, kb, mid);
}
__name(showUser, "showUser");
async function showCfg(env, chat, mid) {
  const S = await cfg(env);
  const demo = await demoMode(env);
  const t = "<b>⚙️ Настройки</b>\n" + CFG_KEYS.map(([k, n]) => `• ${n}: <code>${esc(S[k]).slice(0, 80)}</code>`).join("\n") + `
• Демонстрационный режим: <b>${demo ? "включён" : "выключен"}</b>

Нажмите, чтобы изменить:`;
  const kb = CFG_KEYS.map(([k, n]) => [B("✏️ " + n, "cf:" + k)]);
  kb.push([B(demo ? "🛑 Выключить демо-режим" : "▶️ Включить демо-режим", "demo:" + (demo ? "0" : "1"))], HOME);
  return send(env, chat, t, kb, mid);
}
__name(showCfg, "showCfg");
async function stranger(env, m, rl) {
  const f = m.from, chat = m.chat.id;
  const S = await cfg(env);
  if (rl === "blocked") return send(env, chat, `⛔ Ваш доступ заблокирован.
Поддержка: ${esc(S.support_contact)}`);
  const welcome = esc(S.welcome_text).replace(/\{id\}/g, `<code>${f.id}</code>`);
  await send(env, chat, welcome);
  const last = +(await getSt(env, f.id, "notified") || 0);
  if (now() - last > 86400) {
    await setSt(env, f.id, "notified", String(now()));
    await send(env, env.SUPERADMIN_ID, `🔔 Незнакомый пользователь пишет боту
ID: <code>${f.id}</code>
${esc(uname(f))}`, [[B("➕ Добавить", "ua:" + f.id)]]).catch(() => {
    });
  }
}
__name(stranger, "stranger");
async function requireLicense(env, chat, uid) {
  if (isSuper(env, uid)) return false;
  const u = await getUser(env, uid);
  if (!u || u.license_accepted_at) return false;
  await showLicense(env, chat, null);
  return true;
}
__name(requireLicense, "requireLicense");
async function onMessage(env, m) {
  const uid = m.from.id, chat = m.chat.id;
  const rl = await roleOf(env, uid);
  if (rl !== "super" && rl !== "user") return stranger(env, m, rl);
  if (await requireLicense(env, chat, uid)) return;
  await touch(env, m.from);
  const sup = rl === "super";
  if (m.document) {
    if (!sup) return showMenu(env, chat, null, uid);
    const f = await tg(env, "getFile", { file_id: m.document.file_id });
    if (!f.ok) return send(env, chat, "❌ Не удалось получить файл");
    const text = await (await fetch(`https://api.telegram.org/file/bot${env.BOT_TOKEN}/${f.result.file_path}`)).text();
    const r = await importCSV(env, text, uid);
    return send(env, chat, r.error ? "❌ " + esc(r.error) : `✅ Импорт: добавлено <b>${r.added}</b>, обновлено <b>${r.updated}</b>, пропущено <b>${r.skipped}</b>`, [HOME]);
  }
  const t = (m.text || "").trim();
  if (t.startsWith("/")) {
    await delSt(env, uid, "wait");
    return showMenu(env, chat, null, uid);
  }
  const w = JSON.parse(await getSt(env, uid, "wait") || "null");
  if (!w || !sup) return showMenu(env, chat, null, uid);
  await delSt(env, uid, "wait");
  if (w.t === "q") {
    await setSt(env, uid, "q", t);
    return showList(env, chat, null, uid, "q", 0);
  }
  if (w.t === "vac") {
    const d = parseDur(t);
    if (!d) {
      await setSt(env, uid, "wait", JSON.stringify(w));
      return send(env, chat, "Формат: <code>3d</code> или <code>12h</code>");
    }
    await setStatus(env, w.id, "yellow", uid, d);
    return showCard(env, chat, null, w.id, uid);
  }
  if (w.t === "tag") {
    await setTags(env, w.id, t, uid);
    return showCard(env, chat, null, w.id, uid);
  }
  if (w.t === "note") {
    await setNote(env, w.id, t === "-" ? "" : t, uid);
    return showCard(env, chat, null, w.id, uid);
  }
  if (w.t === "adm") {
    const ok = await addUser(env, t, uid);
    if (ok) send(env, t, "✅ Вам открыт доступ к боту. Нажмите /start").catch(() => {
    });
    await send(env, chat, ok ? "✅ Пользователь добавлен" : "❌ Неверный ID");
    return showUsers(env, chat, null, 0);
  }
  if (w.t === "cfg") {
    const ok = await setCfg(env, w.k, t);
    await send(env, chat, ok ? "✅ Сохранено" : "❌ Неверное значение (лимиты — только число ≥ 1)");
    return showCfg(env, chat, null);
  }
  if (w.t === "bc") {
    const r = await broadcast(env, t, uid);
    return send(env, chat, `📢 Отправлено: ${r.ok}/${r.total}`, [HOME]);
  }
}
__name(onMessage, "onMessage");
var USER_OK = ["m", "my", "pf", "sup", "fd", "tk", "rs", "rs2", "a", "cdm", "cd"];
async function onCallback(env, q) {
  const uid = q.from.id, chat = q.message.chat.id, mid = q.message.message_id;
  await tg(env, "answerCallbackQuery", { callback_query_id: q.id });
  const rl = await roleOf(env, uid);
  if (rl !== "super" && rl !== "user") return;
  const sup = rl === "super";
  const [c, ...r] = q.data.split(":");
  if (c === "lic") {
    if (sup) return showMenu(env, chat, mid, uid);
    if (r[0] === "view") return showLicense(env, chat, mid);
    if (r[0] === "yes") {
      await env.DB.prepare("UPDATE admins SET license_accepted_at=? WHERE telegram_id=?").bind(now(), uid).run();
      return showMenu(env, chat, mid, uid);
    }
    return send(env, chat, "⛔ Без принятия соглашения доступ к боту невозможен.", [[B("📄 Показать соглашение", "lic:view")]], mid);
  }
  if (!sup && await requireLicense(env, chat, uid)) return;
  if (!sup && !USER_OK.includes(c)) return;
  await touch(env, q.from);
  await delSt(env, uid, "wait");
  switch (c) {
    case "m":
      return showMenu(env, chat, mid, uid);
    case "fd":
      return showFind(env, chat, mid, uid);
    case "tk": {
      if (r[0] !== "any") return;
      const x = await takeAnyAccount(env, uid);
      if (x.limit) return showLimit(env, chat, mid, x);
      if (x.none) {
        const S = await cfg(env);
        return send(env, chat, esc(S.bot_empty_text), [[B("🔍 Попробовать ещё раз", "fd")], [B("🛟 Поддержка", "sup")], HOME], mid);
      }
      return showCard(env, chat, mid, x.id, uid);
    }
    case "my":
      return showMy(env, chat, mid, uid);
    case "pf":
      return showProfile(env, chat, mid, uid);
    case "sup":
      return showSupport(env, chat, mid);
    case "rs": {
      const S = await cfg(env), d = r[0] === "day";
      return send(env, chat, `♻️ Сбросить лимит ${d ? "за сутки" : "за неделю"}?
Цена: <b>${esc(d ? S.price_day : S.price_week)}</b>`, [[B("✅ Подтвердить", "rs2:" + r[0]), B("Отмена", "m")]], mid);
    }
    case "rs2": {
      const S = await cfg(env), d = r[0] === "day";
      await send(env, chat, `✅ Запрос принят.
Для оплаты и сброса лимита (${d ? "сутки" : "неделя"}) напишите в поддержку: <b>${esc(S.support_contact)}</b>`, [HOME], mid);
      await send(env, env.SUPERADMIN_ID, `♻️ Запрос сброса лимита (${d ? "сутки" : "неделя"})
Пользователь: <code>${uid}</code> ${esc(uname(q.from))}`, [[B("✅ Сбросить сейчас", `rst:${uid}:${r[0]}`)]]).catch(() => {
      });
      return;
    }
    case "a":
      return showCard(env, chat, mid, +r[0], uid);
    case "cdm": {
      const a = await accById(env, +r[0]);
      if (!a) return;
      if (!sup && !(a.holder_id === uid && a.status === "green")) return;
      return showCd(env, chat, mid, a.id, uid);
    }
    case "cd": {
      const id = +r[0], sec = +r[1], a = await accById(env, id);
      if (!a) return;
      const ok = sup ? sec > 0 : a.holder_id === uid && a.status === "green" && CD.some((x) => x[1] === sec);
      if (!ok) return;
      await setStatus(env, id, "yellow", uid, sec);
      return showCard(env, chat, mid, id, uid);
    }
    // ---- только админ ----
    case "l":
      return showList(env, chat, mid, uid, r.slice(1).join(":"), +r[0]);
    case "rm":
      return send(env, chat, "🎲 Случайный аккаунт какого статуса?", [[B("⚪ Нулёвка", "rnd:grey"), B("🟢 В аренде", "rnd:green")], [B("🟡 Кулдаун", "rnd:yellow"), B("🔵 Был кулдаун", "rnd:blue")], [B("⚫ Бан", "rnd:black")], HOME], mid);
    case "rnd": {
      if (!ST.includes(r[0])) return;
      const a = await randomAcc(env, r[0]);
      if (!a) return send(env, chat, `Нет аккаунтов: ${LBL[r[0]]}`, [HOME], mid);
      return showCard(env, chat, mid, a.id, uid);
    }
    case "s": {
      if (r[1] === "yellow") return showCd(env, chat, mid, +r[0], uid);
      await setStatus(env, +r[0], r[1], uid);
      return showCard(env, chat, mid, +r[0], uid);
    }
    case "cdx":
      await setSt(env, uid, "wait", JSON.stringify({ t: "vac", id: +r[0] }));
      return send(env, chat, "⏳ Введите срок кулдауна: <code>3d</code> (дни) или <code>12h</code> (часы)");
    case "xt":
      await extendVac(env, +r[0], uid);
      return showCard(env, chat, mid, +r[0], uid);
    case "tg":
      await setSt(env, uid, "wait", JSON.stringify({ t: "tag", id: +r[0] }));
      return send(env, chat, "🏷 Введите теги через запятую (заменят текущие):");
    case "nt":
      await setSt(env, uid, "wait", JSON.stringify({ t: "note", id: +r[0] }));
      return send(env, chat, "📝 Введите новую заметку (или <code>-</code> чтобы очистить):");
    case "srch":
      await setSt(env, uid, "wait", JSON.stringify({ t: "q" }));
      return send(env, chat, "🔎 Введите запрос (ID, почта, имя…) или <code>#123</code> — номер аккаунта:");
    case "tags": {
      const { results } = await env.DB.prepare("SELECT value v,COUNT(*) c FROM accounts,json_each(accounts.tags) GROUP BY value ORDER BY c DESC LIMIT 30").all();
      const kb = results.map((x) => [B(`${x.v} (${x.c})`, ("l:0:t:" + x.v).slice(0, 62))]);
      kb.push(HOME);
      return send(env, chat, results.length ? "🏷 Теги:" : "Тегов пока нет", kb, mid);
    }
    case "st": {
      const s = await stats(env);
      return send(env, chat, `<b>📊 Статистика</b>
Всего: ${ST.reduce((n, k) => n + s[k], 0)}
⚪ Нулёвки: ${s.grey}
🟢 В аренде: ${s.green}
🟡 Кулдаун: ${s.yellow}
🔵 Был кулдаун: ${s.blue}
⚫ Баны: ${s.black}

⏰ Кулдаун закончится за 24 ч: ${s.soon}
📤 Выдано за 24 ч: ${s.takes24}
👥 Пользователей: ${s.users}`, [HOME], mid);
    }
    case "exm":
      return send(env, chat, "Что выгрузить?", [[B("Все", "ex:all"), B("⚪ Нулёвки", "ex:grey")], [B("🟢 В аренде", "ex:green"), B("🟡 Кулдаун", "ex:yellow")], [B("🔵 Был кулдаун", "ex:blue"), B("⚫ Баны", "ex:black")], HOME], mid);
    case "ex": {
      const fd = new FormData();
      fd.append("chat_id", String(chat));
      fd.append("document", new Blob([await exportCSV(env, r[0])], { type: "text/csv" }), `accounts_${r[0]}.csv`);
      await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendDocument`, { method: "POST", body: fd });
      await env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(uid, "export", r[0]).run();
      return;
    }
    case "us":
      return showUsers(env, chat, mid, +r[0] || 0);
    case "u":
      return showUser(env, chat, mid, +r[0]);
    case "ur":
      await resetLimit(env, +r[0], r[1], uid);
      return showUser(env, chat, mid, +r[0]);
    case "rst":
      await resetLimit(env, +r[0], r[1], uid);
      return send(env, chat, `✅ Лимит сброшен: ${r[0]}`, [[B("👤 Пользователь", "u:" + r[0])], HOME], mid);
    case "ub": {
      const u = await getUser(env, +r[0]);
      if (u) await setBlocked(env, +r[0], !u.blocked, uid);
      return showUser(env, chat, mid, +r[0]);
    }
    case "ud":
      return send(env, chat, `🗑 Удалить пользователя ${r[0]}?`, [[B("Да, удалить", "ud2:" + r[0]), B("Отмена", "u:" + r[0])]], mid);
    case "ud2":
      await delUser(env, +r[0], uid);
      return showUsers(env, chat, mid, 0);
    case "ua": {
      const ok = await addUser(env, r[0], uid);
      if (ok) send(env, r[0], "✅ Вам открыт доступ к боту. Нажмите /start").catch(() => {
      });
      return send(env, chat, ok ? `✅ Пользователь ${r[0]} добавлен` : "Не удалось добавить", [[B("👥 Пользователи", "us:0")]], mid);
    }
    case "adm_add":
      await setSt(env, uid, "wait", JSON.stringify({ t: "adm" }));
      return send(env, chat, "➕ Отправьте Telegram ID нового пользователя:");
    case "cfg":
      return showCfg(env, chat, mid);
    case "demo": {
      await setDemoMode(env, r[0] === "1", uid);
      return showCfg(env, chat, mid);
    }
    case "cf": {
      if (!CFG_KEYS.some((x) => x[0] === r[0])) return;
      await setSt(env, uid, "wait", JSON.stringify({ t: "cfg", k: r[0] }));
      return send(env, chat, `✏️ Введите новое значение: <b>${CFG_KEYS.find((x) => x[0] === r[0])[1]}</b>` + (r[0].endsWith("_limit") ? "\n(число)" : ""));
    }
    case "bc":
      await setSt(env, uid, "wait", JSON.stringify({ t: "bc" }));
      return send(env, chat, "📢 Введите текст рассылки для всех пользователей:");
    case "dl":
      return send(env, chat, `🗑 Удалить аккаунт #${r[0]} навсегда?`, [[B("Да, удалить", "dl2:" + r[0]), B("Отмена", "a:" + r[0])]], mid);
    case "dl2":
      await delAccount(env, +r[0], uid);
      return send(env, chat, "🗑 Удалено", [HOME], mid);
    case "aud": {
      const { results } = await env.DB.prepare("SELECT * FROM audit_logs ORDER BY id DESC LIMIT 15").all();
      return send(env, chat, "<b>Последние действия</b>\n" + (results.map((a) => `${a.created_at.slice(5, 16)} · ${a.admin_id || "cron"} · ${a.action}${a.account_id ? " #" + a.account_id : ""} ${esc(a.old_value ? ru(a.old_value) + "→" : "")}${esc(ru(a.new_value || ""))}`).join("\n") || "—"), [HOME], mid);
    }
  }
}
__name(onCallback, "onCallback");
var te = new TextEncoder();
async function sign(env, s) {
  const k = await crypto.subtle.importKey("raw", te.encode(env.BOT_TOKEN + "|" + env.WEB_PASSWORD), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return [...new Uint8Array(await crypto.subtle.sign("HMAC", k, te.encode(s)))].map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(sign, "sign");
async function webUser(env, req) {
  const m = /(?:^|; )sid=([^;]+)/.exec(req.headers.get("cookie") || "");
  if (!m) return null;
  const [id, exp, sig] = m[1].split(".");
  if (!id || +exp < now() || sig !== await sign(env, id + "." + exp)) return null;
  return isSuper(env, id) ? +id : null;
}
__name(webUser, "webUser");
async function route(req, env) {
  const url = new URL(req.url), p = url.pathname;
  if (p === "/webhook" && req.method === "POST") {
    if (req.headers.get("x-telegram-bot-api-secret-token") !== env.WEBHOOK_SECRET) return new Response("forbidden", { status: 403 });
    const u = await req.json();
    try {
      if (u.message) await onMessage(env, u.message);
      else if (u.callback_query) await onCallback(env, u.callback_query);
    } catch (e) {
      console.error("bot", e);
    }
    return new Response("ok");
  }
  if (p === "/license") return new Response(`<html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Лицензионное соглашение</title><body style="font:16px system-ui;line-height:1.55;max-width:800px;margin:40px auto;padding:0 20px;white-space:pre-wrap"><h1>Лицензионное соглашение</h1>${esc(LICENSE_TEXT)}</body></html>`, { headers: { "content-type": "text/html;charset=utf-8", "cache-control": "no-store" } });
  if (p === "/") return new Response(HTML, { headers: { "content-type": "text/html;charset=utf-8", "cache-control": "no-store" } });
  if (p === "/api/login" && req.method === "POST") {
    const b = await req.json().catch(() => ({}));
    if (!env.WEB_PASSWORD || b.password !== env.WEB_PASSWORD || !isSuper(env, b.id)) return json({ error: "Доступ запрещён (панель только для главного админа)" }, 403);
    const exp = now() + 86400 * 7, id = String(+b.id);
    return json({ ok: 1 }, 200, { "set-cookie": `sid=${id}.${exp}.${await sign(env, id + "." + exp)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=604800` });
  }
  if (!p.startsWith("/api/")) return new Response("Not found", { status: 404 });
  const uid = await webUser(env, req);
  if (!uid) return json({ error: "unauthorized" }, 401);
  const body = /* @__PURE__ */ __name(async () => req.json().catch(() => ({})), "body");
  if (p === "/api/me") return json({ id: uid, super: true });
  if (p === "/api/accounts") {
    const f = {};
    for (const k of ["status", "q", "tag"]) if (url.searchParams.get(k)) f[k] = url.searchParams.get(k);
    return json(await listAccounts(env, f, +url.searchParams.get("page") || 0, 25));
  }
  if (p === "/api/random") {
    const a = await randomAcc(env, url.searchParams.get("status") || "grey");
    return a ? json(a) : json({ error: "Нет подходящих аккаунтов" }, 404);
  }
  if (p === "/api/status" && req.method === "POST") {
    const b = await body();
    const ok = await setStatus(env, +b.id, b.status, uid, parseDur(b.dur));
    return json({ ok }, ok ? 200 : 400);
  }
  if (p === "/api/extend" && req.method === "POST") {
    const b = await body();
    return json({ ok: await extendVac(env, +b.id, uid) });
  }
  if (p === "/api/tags" && req.method === "POST") {
    const b = await body();
    await setTags(env, +b.id, b.tags || "", uid);
    return json({ ok: 1 });
  }
  if (p === "/api/note" && req.method === "POST") {
    const b = await body();
    await setNote(env, +b.id, b.note, uid);
    return json({ ok: 1 });
  }
  if (p === "/api/delete" && req.method === "POST") {
    const b = await body();
    await delAccount(env, +b.id, uid);
    return json({ ok: 1 });
  }
  if (p === "/api/stats") return json(await stats(env));
  if (p === "/api/import" && req.method === "POST") {
    const r = await importCSV(env, await req.text(), uid);
    return json(r, r.error ? 400 : 200);
  }
  if (p === "/api/export") {
    await env.DB.prepare("INSERT INTO audit_logs(admin_id,action,new_value) VALUES(?,?,?)").bind(uid, "export", url.searchParams.get("status") || "all").run();
    return new Response(await exportCSV(env, url.searchParams.get("status")), { headers: { "content-type": "text/csv;charset=utf-8", "content-disposition": "attachment; filename=accounts.csv" } });
  }
  if (p === "/api/users") {
    if (req.method === "GET") {
      const S = await cfg(env);
      return json({ limits: { day: +S.day_limit, week: +S.week_limit }, users: await listUsers(env) });
    }
    if (req.method === "POST") {
      const b = await body();
      const ok = await addUser(env, b.id, uid);
      if (ok) send(env, b.id, "✅ Вам открыт доступ к боту. Нажмите /start").catch(() => {
      });
      return json({ ok });
    }
    if (req.method === "DELETE") return json({ ok: await delUser(env, url.searchParams.get("id"), uid) });
  }
  if (p === "/api/user/reset" && req.method === "POST") {
    const b = await body();
    await resetLimit(env, +b.id, b.kind, uid);
    return json({ ok: 1 });
  }
  if (p === "/api/user/block" && req.method === "POST") {
    const b = await body();
    await setBlocked(env, +b.id, !!b.blocked, uid);
    return json({ ok: 1 });
  }
  if (p === "/api/demo") {
    if (req.method === "GET") return json({ enabled: await demoMode(env) });
    if (req.method === "POST") {
      const b = await body();
      return json({ enabled: await setDemoMode(env, !!b.enabled, uid) });
    }
  }
  if (p === "/api/settings") {
    if (req.method === "GET") return json(await cfg(env));
    if (req.method === "POST") {
      const b = await body();
      const bad = [];
      for (const k in b) if (!await setCfg(env, k, b[k])) bad.push(k);
      return json({ ok: !bad.length, bad }, bad.length ? 400 : 200);
    }
  }
  if (p === "/api/broadcast" && req.method === "POST") {
    const b = await body();
    if (!b.text) return json({ error: "Пустой текст" }, 400);
    return json(await broadcast(env, String(b.text), uid));
  }
  if (p === "/api/audit") return json((await env.DB.prepare("SELECT * FROM audit_logs ORDER BY id DESC LIMIT 100").all()).results.map((a) => ({ ...a, old_value: ru(a.old_value), new_value: ru(a.new_value) })));
  return json({ error: "not found" }, 404);
}
__name(route, "route");
var index_default = {
  async fetch(req, env) {
    try {
      return await route(req, env);
    } catch (e) {
      console.error(e);
      return json({ error: "internal error" }, 500);
    }
  },
  async scheduled(ev, env, ctx) {
    ctx.waitUntil(cron(env));
  }
};
var _a;
var HTML = String.raw(_a || (_a = __template([`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Accounts Admin</title>
<style>
:root{--bg:#0f1115;--card:#181b22;--bd:#2a2f3a;--tx:#e6e8ee;--mu:#8b92a3;--ac:#4c8dff}
@media(prefers-color-scheme:light){:root{--bg:#f4f5f8;--card:#fff;--bd:#d9dce3;--tx:#1b1e25;--mu:#69708a}}
*{box-sizing:border-box}body{margin:0;font:14px system-ui,sans-serif;background:var(--bg);color:var(--tx)}
.box{max-width:340px;margin:12vh auto;padding:20px;background:var(--card);border:1px solid var(--bd);border-radius:12px;display:grid;gap:10px}
.wrap{max-width:1200px;margin:0 auto;padding:12px}
input,select,button,textarea{font:inherit;padding:8px 10px;border-radius:8px;border:1px solid var(--bd);background:var(--card);color:var(--tx)}
textarea{width:100%;min-height:90px}
button{cursor:pointer;background:var(--ac);color:#fff;border:0}button.g{background:var(--card);color:var(--tx);border:1px solid var(--bd)}button.d{background:#d64545}
.bar{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;align-items:center}
.tabs button{background:var(--card);color:var(--tx);border:1px solid var(--bd)}.tabs button.on{background:var(--ac);color:#fff}
.drop{border:2px dashed var(--bd);border-radius:10px;padding:14px;text-align:center;color:var(--mu);margin:8px 0}.drop.hv{border-color:var(--ac);color:var(--ac)}
.tw{overflow-x:auto;border:1px solid var(--bd);border-radius:10px}table{border-collapse:collapse;width:100%;background:var(--card)}
th,td{padding:8px 10px;text-align:left;border-bottom:1px solid var(--bd);white-space:nowrap}tr.r{cursor:pointer}tr.r:hover{background:rgba(76,141,255,.08)}
.s{padding:2px 8px;border-radius:99px;font-size:12px}.grey{background:#6b728033}.green{background:#30d15833}.yellow{background:#ffd60a33}.blue{background:#0a84ff33}.black{background:#000;color:#fff}
.mod{position:fixed;inset:0;background:#0009;display:grid;place-items:center;padding:10px}.mc{background:var(--card);border:1px solid var(--bd);border-radius:12px;max-width:560px;width:100%;max-height:90vh;overflow:auto;padding:16px}
.f{display:flex;gap:6px;align-items:center;margin:4px 0}.f b{min-width:130px;color:var(--mu);font-weight:500}.f code{flex:1;word-break:break-all;background:var(--bg);padding:4px 6px;border-radius:6px}
.f button{padding:3px 8px}.lock{padding:12px;border:1px dashed var(--bd);border-radius:8px;color:var(--mu);margin:8px 0}
.cards{display:flex;gap:10px;flex-wrap:wrap}.cards div{flex:1;min-width:140px;background:var(--card);border:1px solid var(--bd);border-radius:10px;padding:14px}.cards b{font-size:26px;display:block}
label{display:block;color:var(--mu);margin:10px 0 4px}
</style></head><body><div id="app"></div><script>
var $=function(s){return document.querySelector(s)};
var FIELDS=['g2g_code_id','account_id','password','character_id','secret_question','secret_answer','first_name','last_name','account_country','date_of_birth','account_email','email_password','additional_note'];
var LBL={grey:'⚪ Нулёвка (не брался)',green:'🟢 В аренде',yellow:'🟡 Кулдаун',blue:'🔵 Был кулдаун',black:'⚫ Бан'};
var CD=[['20 часов',72000],['Неделя',604800],['Месяц',2592000],['Год',31536000]];
function shown(v){return String(v==null?'':v).replace(/^'+/,'')}
function el(t,a){var n=document.createElement(t);a=a||{};for(var k in a){if(k==='on'){for(var e in a.on)n.addEventListener(e,a.on[e])}else if(k==='cls')n.className=a[k];else n.setAttribute(k,a[k])}
for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null)continue;if(Array.isArray(c))c.forEach(function(x){n.append(x instanceof Node?x:String(x))});else n.append(c instanceof Node?c:String(c))}return n}
function api(u,o){o=o||{};o.credentials='same-origin';return fetch(u,o).then(function(r){if(r.status===401){login();throw 'auth'}return r.json().catch(function(){return{}}).then(function(j){if(!r.ok)throw (j.error||(j.bad?'Неверные значения: '+j.bad.join(', '):r.status));return j})})}
function err(e){if(e!=='auth')alert(e)}
function post(u,b){return api(u,{method:'POST',body:JSON.stringify(b)})}
function boot(){api('/api/me').then(dash).catch(function(e){if(e!=='auth')login()})}
function login(){var id=el('input',{placeholder:'Telegram ID',inputmode:'numeric'}),pw=el('input',{type:'password',placeholder:'Пароль'});
$('#app').replaceChildren(el('div',{cls:'box'},el('h2',{},'🔐 Вход'),id,pw,el('button',{on:{click:function(){post('/api/login',{id:id.value,password:pw.value}).then(boot).catch(err)}}},'Войти'),el('a',{href:'/license',target:'_blank'},'📄 Лицензионное соглашение')))}
var S={tab:'acc',status:'',q:'',tag:'',page:0};
function dash(){var tabs=[['acc','Аккаунты'],['usr','Пользователи'],['st','Статистика'],['cfg','Настройки'],['sup','Поддержка'],['aud','Аудит']];
var body=el('div',{});$('#app').replaceChildren(el('div',{cls:'wrap'},el('div',{cls:'bar tabs'},tabs.map(function(t){return el('button',{cls:S.tab===t[0]?'on':'',on:{click:function(){S.tab=t[0];dash()}}},t[1])})),body));
({acc:accs,usr:users,st:stats,cfg:settings,sup:support,aud:auds})[S.tab](body)}
function stSelect(all,val){var o=[''].concat(Object.keys(LBL));return el('select',{},o.map(function(v){if(!v&&!all)return null;var x=el('option',{value:v},v?LBL[v]:'все статусы');if(v===val)x.selected=true;return x}))}
function accs(root){var q=el('input',{placeholder:'Поиск…',value:S.q}),st=stSelect(true,S.status),tg=el('input',{placeholder:'тег',value:S.tag,size:8});
function go(){S.q=q.value;S.status=st.value;S.tag=tg.value;S.page=0;load()}
var rs=stSelect(false,'grey');rs.value='grey';
var rb=el('button',{on:{click:function(){api('/api/random?status='+rs.value).then(modal).catch(err)}}},'🎲 Случайный');
var tw=el('div',{cls:'tw'}),pg=el('div',{cls:'bar'}),drop=el('div',{cls:'drop'},'📂 Перетащите CSV сюда или нажмите');
var fi=el('input',{type:'file',accept:'.csv,text/csv',style:'display:none'});
function imp(f){if(!f)return;f.text().then(function(t){return api('/api/import',{method:'POST',body:t})}).then(function(r){alert('Добавлено '+r.added+', обновлено '+r.updated+', пропущено '+r.skipped);load()}).catch(err)}
drop.onclick=function(){fi.click()};fi.onchange=function(){imp(fi.files[0])};
drop.ondragover=function(e){e.preventDefault();drop.classList.add('hv')};drop.ondragleave=function(){drop.classList.remove('hv')};
drop.ondrop=function(e){e.preventDefault();drop.classList.remove('hv');imp(e.dataTransfer.files[0])};
root.append(el('div',{cls:'bar'},q,st,tg,el('button',{on:{click:go}},'Найти'),rs,rb,el('a',{href:'/api/export?status='+S.status},el('button',{cls:'g'},'⬇️ Экспорт CSV'))),drop,fi,tw,pg);
q.addEventListener('keydown',function(e){if(e.key==='Enter')go()});
function load(){var u='/api/accounts?page='+S.page+'&status='+encodeURIComponent(S.status)+'&q='+encodeURIComponent(S.q)+'&tag='+encodeURIComponent(S.tag);
api(u).then(function(d){var th=['#','Статус','account_id','g2g','Почта','Держит','Теги','Кулдаун до'];
tw.replaceChildren(el('table',{},el('tr',{},th.map(function(h){return el('th',{},h)})),d.rows.map(function(a){var tags=JSON.parse(a.tags||'[]').join(', ');
return el('tr',{cls:'r',on:{click:function(){modal(a)}}},el('td',{},a.id),el('td',{},el('span',{cls:'s '+a.status},LBL[a.status])),el('td',{},shown(a.account_id)),el('td',{},shown(a.g2g_code_id)),el('td',{},shown(a.account_email)),el('td',{},a.holder_id),el('td',{},tags),el('td',{},a.vac_until?new Date(a.vac_until*1000).toLocaleString():''))})));
var pages=Math.max(1,Math.ceil(d.total/25));pg.replaceChildren(el('button',{cls:'g',on:{click:function(){if(S.page>0){S.page--;load()}}}},'◀'),'Стр. '+(S.page+1)+'/'+pages+' · всего '+d.total,el('button',{cls:'g',on:{click:function(){if(S.page+1<pages){S.page++;load()}}}},'▶'))}).catch(err)}
load()}
function copy(t,b){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='✓';setTimeout(function(){b.textContent=o},900)})}
function modal(a){var old=document.querySelector('.mod');if(old)old.remove();
var tags=el('input',{value:JSON.parse(a.tags||'[]').join(', '),placeholder:'теги через запятую',style:'flex:1'});
var m=el('div',{cls:'mod',on:{click:function(e){if(e.target===m)m.remove()}}});
function fld(k){if(!a[k])return null;var v=shown(a[k]),b=el('button',{cls:'g'},'📋');b.onclick=function(){copy(v,b)};return el('div',{cls:'f'},el('b',{},k),el('code',{},v),b)}
function sb(s){return el('button',{cls:'g',on:{click:function(){post('/api/status',{id:a.id,status:s}).then(function(){m.remove();dash()}).catch(err)}}},LBL[s])}
var cdSel=el('select',{},CD.map(function(c){return el('option',{value:c[1]},c[0])}));
var both=shown(a.account_email||'')+'
'+shown(a.email_password||'');var bb=el('button',{cls:'g'},'📋 почта+пароль');bb.onclick=function(){copy(both,bb)};
var note=el('input',{value:a.additional_note||'',placeholder:'заметка',style:'flex:1'});
var content=[el('h3',{},'#'+a.id+' · '+LBL[a.status]+(a.holder_id?' · держит '+a.holder_id:'')),FIELDS.map(fld),el('div',{cls:'f'},bb),
el('div',{cls:'bar'},note,el('button',{cls:'g',on:{click:function(){post('/api/note',{id:a.id,note:note.value}).then(function(){m.remove();dash()}).catch(err)}}},'📝 Сохранить заметку')),
el('div',{cls:'bar'},'Статус:',sb('grey'),sb('green'),sb('blue'),sb('black')),
el('div',{cls:'bar'},cdSel,el('button',{on:{click:function(){post('/api/status',{id:a.id,status:'yellow',dur:+cdSel.value}).then(function(){m.remove();dash()}).catch(err)}}},'🟡 Поставить кулдаун'))];
if(a.status==='yellow')content.push(el('button',{cls:'g',on:{click:function(){post('/api/extend',{id:a.id}).then(function(){m.remove();dash()}).catch(err)}}},'⏱ +1 день'));
content.push(el('div',{cls:'bar'},tags,el('button',{on:{click:function(){post('/api/tags',{id:a.id,tags:tags.value}).then(function(){m.remove();dash()}).catch(err)}}},'Сохранить теги')));
content.push(el('div',{cls:'bar'},el('button',{cls:'g',on:{click:function(){api('/api/random?status='+a.status).then(modal).catch(err)}}},'🎲 Ещё случайный'),
el('button',{cls:'d',on:{click:function(){if(confirm('Удалить #'+a.id+' навсегда?'))post('/api/delete',{id:a.id}).then(function(){m.remove();dash()}).catch(err)}}},'🗑 Удалить'),
el('button',{cls:'g',on:{click:function(){m.remove()}}},'Закрыть')));
m.append(el('div',{cls:'mc'},content));document.body.append(m)}
function users(root){var inp=el('input',{placeholder:'Telegram ID',inputmode:'numeric'}),box=el('div',{});
root.append(el('div',{cls:'bar'},inp,el('button',{on:{click:function(){post('/api/users',{id:inp.value}).then(function(r){if(!r.ok)alert('Неверный ID');dash()}).catch(err)}}},'➕ Добавить пользователя')),box);
api('/api/users').then(function(d){var th=['ID','Имя','Сутки','Неделя','Всего','В аренде','Кулдаунов','Посл. активность',''];
box.replaceChildren(el('div',{cls:'tw'},el('table',{},el('tr',{},th.map(function(h){return el('th',{},h)})),d.users.map(function(u){
function bt(txt,cls,fn){return el('button',{cls:cls,on:{click:fn}},txt)}
return el('tr',{},el('td',{},u.telegram_id),el('td',{},(u.blocked?'🚫 ':'')+(u.name||'')),el('td',{},u.day+'/'+d.limits.day),el('td',{},u.week+'/'+d.limits.week),el('td',{},u.total),el('td',{},u.hold),el('td',{},u.cds),el('td',{},u.last_seen?new Date(u.last_seen*1000).toLocaleString():''),
el('td',{},[bt('♻️ сутки','g',function(){post('/api/user/reset',{id:u.telegram_id,kind:'day'}).then(dash).catch(err)}),' ',bt('♻️ неделя','g',function(){post('/api/user/reset',{id:u.telegram_id,kind:'week'}).then(dash).catch(err)}),' ',
bt(u.blocked?'✅ разблок.':'🚫 блок','g',function(){post('/api/user/block',{id:u.telegram_id,blocked:!u.blocked}).then(dash).catch(err)}),' ',
bt('🗑','d',function(){if(confirm('Удалить '+u.telegram_id+'?'))api('/api/users?id='+u.telegram_id,{method:'DELETE'}).then(dash).catch(err)})]))}))))}).catch(err)}
function stats(root){api('/api/stats').then(function(s){function c(t,v){return el('div',{},el('b',{},v),t)}
root.append(el('div',{cls:'cards'},c(LBL.grey,s.grey),c(LBL.green,s.green),c(LBL.yellow,s.yellow),c(LBL.blue,s.blue),c(LBL.black,s.black),c('⏰ Кулдаун кончится за 24 ч',s.soon),c('📤 Выдано за 24 ч',s.takes24),c('👥 Пользователей',s.users)))}).catch(err)}
function form(root,keys,multi){api('/api/settings').then(function(S){var inputs={};var box=el('div',{});
keys.forEach(function(k){var i=multi&&multi.indexOf(k[0])>=0?el('textarea',{}):el('input',{style:'width:100%'});i.value=S[k[0]];inputs[k[0]]=i;box.append(el('label',{},k[1]),i)});
box.append(el('div',{cls:'bar'},el('button',{on:{click:function(){var b={};for(var k in inputs)b[k]=inputs[k].value;post('/api/settings',b).then(function(){alert('Сохранено')}).catch(err)}}},'💾 Сохранить')));root.append(box)}).catch(err)}
function settings(root){var demo=el('div',{});api('/api/demo').then(function(d){var on=el('button',{cls:d.enabled?'d':'g',on:{click:function(){post('/api/demo',{enabled:!d.enabled}).then(function(x){d.enabled=x.enabled;on.textContent=d.enabled?'🛑 Выключить демо-режим':'▶️ Включить демо-режим';on.className=d.enabled?'d':'g';status.textContent=d.enabled?'Сейчас Telegram отвечает этому ID как обычному пользователю.':'Сейчас включён обычный режим администратора.'}).catch(err)}}},d.enabled?'🛑 Выключить демо-режим':'▶️ Включить демо-режим'),status=el('span',{},d.enabled?'Сейчас Telegram отвечает этому ID как обычному пользователю.':'Сейчас включён обычный режим администратора.');demo.append(el('h3',{},'🎭 Демонстрационный режим'),status,el('div',{cls:'bar'},on))}).catch(err);root.append(demo,el('h3',{},'Лимиты, цены и текст для незнакомых'));
form(root,[['day_limit','Лимит аккаунтов в сутки'],['week_limit','Лимит аккаунтов в неделю'],['price_day','Цена сброса суточного лимита'],['price_week','Цена сброса недельного лимита'],['welcome_text','Текст, который видят незнакомые пользователи бота'],['bot_menu_text','Приветствие в меню'],['bot_find_text','Подсказка поиска'],['bot_empty_text','Текст при отсутствии аккаунтов'],['bot_limit_text','Текст при достижении лимита']],['welcome_text','bot_menu_text','bot_find_text','bot_empty_text','bot_limit_text']);
var tx=el('textarea',{placeholder:'Текст рассылки всем пользователям'});
root.append(el('h3',{},'📢 Рассылка'),tx,el('div',{cls:'bar'},el('button',{on:{click:function(){if(!tx.value)return;post('/api/broadcast',{text:tx.value}).then(function(r){alert('Отправлено: '+r.ok+'/'+r.total);tx.value=''}).catch(err)}}},'Отправить всем')))}
function support(root){root.append(el('h3',{},'🛟 Поддержка'),el('div',{cls:'lock'},'Этот текст пользователи видят в разделе «Поддержка», а контакт — при покупке сброса лимитов.'));
form(root,[['support_contact','Контакт поддержки (например @flight_san)'],['support_text','Текст раздела «Поддержка»']],['support_text'])}
function auds(root){var box=el('div',{cls:'tw'});root.append(box);api('/api/audit').then(function(l){box.replaceChildren(el('table',{},el('tr',{},['Время','Кто','Действие','Аккаунт','Изменение'].map(function(h){return el('th',{},h)})),l.map(function(a){return el('tr',{},el('td',{},a.created_at),el('td',{},a.admin_id||'cron'),el('td',{},a.action),el('td',{},a.account_id||''),el('td',{},(a.old_value?a.old_value+' → ':'')+(a.new_value||'')))})))})}
boot();
<\/script></body></html>`], [`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Accounts Admin</title>
<style>
:root{--bg:#0f1115;--card:#181b22;--bd:#2a2f3a;--tx:#e6e8ee;--mu:#8b92a3;--ac:#4c8dff}
@media(prefers-color-scheme:light){:root{--bg:#f4f5f8;--card:#fff;--bd:#d9dce3;--tx:#1b1e25;--mu:#69708a}}
*{box-sizing:border-box}body{margin:0;font:14px system-ui,sans-serif;background:var(--bg);color:var(--tx)}
.box{max-width:340px;margin:12vh auto;padding:20px;background:var(--card);border:1px solid var(--bd);border-radius:12px;display:grid;gap:10px}
.wrap{max-width:1200px;margin:0 auto;padding:12px}
input,select,button,textarea{font:inherit;padding:8px 10px;border-radius:8px;border:1px solid var(--bd);background:var(--card);color:var(--tx)}
textarea{width:100%;min-height:90px}
button{cursor:pointer;background:var(--ac);color:#fff;border:0}button.g{background:var(--card);color:var(--tx);border:1px solid var(--bd)}button.d{background:#d64545}
.bar{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;align-items:center}
.tabs button{background:var(--card);color:var(--tx);border:1px solid var(--bd)}.tabs button.on{background:var(--ac);color:#fff}
.drop{border:2px dashed var(--bd);border-radius:10px;padding:14px;text-align:center;color:var(--mu);margin:8px 0}.drop.hv{border-color:var(--ac);color:var(--ac)}
.tw{overflow-x:auto;border:1px solid var(--bd);border-radius:10px}table{border-collapse:collapse;width:100%;background:var(--card)}
th,td{padding:8px 10px;text-align:left;border-bottom:1px solid var(--bd);white-space:nowrap}tr.r{cursor:pointer}tr.r:hover{background:rgba(76,141,255,.08)}
.s{padding:2px 8px;border-radius:99px;font-size:12px}.grey{background:#6b728033}.green{background:#30d15833}.yellow{background:#ffd60a33}.blue{background:#0a84ff33}.black{background:#000;color:#fff}
.mod{position:fixed;inset:0;background:#0009;display:grid;place-items:center;padding:10px}.mc{background:var(--card);border:1px solid var(--bd);border-radius:12px;max-width:560px;width:100%;max-height:90vh;overflow:auto;padding:16px}
.f{display:flex;gap:6px;align-items:center;margin:4px 0}.f b{min-width:130px;color:var(--mu);font-weight:500}.f code{flex:1;word-break:break-all;background:var(--bg);padding:4px 6px;border-radius:6px}
.f button{padding:3px 8px}.lock{padding:12px;border:1px dashed var(--bd);border-radius:8px;color:var(--mu);margin:8px 0}
.cards{display:flex;gap:10px;flex-wrap:wrap}.cards div{flex:1;min-width:140px;background:var(--card);border:1px solid var(--bd);border-radius:10px;padding:14px}.cards b{font-size:26px;display:block}
label{display:block;color:var(--mu);margin:10px 0 4px}
</style></head><body><div id="app"></div><script>
var $=function(s){return document.querySelector(s)};
var FIELDS=['g2g_code_id','account_id','password','character_id','secret_question','secret_answer','first_name','last_name','account_country','date_of_birth','account_email','email_password','additional_note'];
var LBL={grey:'⚪ Нулёвка (не брался)',green:'🟢 В аренде',yellow:'🟡 Кулдаун',blue:'🔵 Был кулдаун',black:'⚫ Бан'};
var CD=[['20 часов',72000],['Неделя',604800],['Месяц',2592000],['Год',31536000]];
function shown(v){return String(v==null?'':v).replace(/^'+/,'')}
function el(t,a){var n=document.createElement(t);a=a||{};for(var k in a){if(k==='on'){for(var e in a.on)n.addEventListener(e,a.on[e])}else if(k==='cls')n.className=a[k];else n.setAttribute(k,a[k])}
for(var i=2;i<arguments.length;i++){var c=arguments[i];if(c==null)continue;if(Array.isArray(c))c.forEach(function(x){n.append(x instanceof Node?x:String(x))});else n.append(c instanceof Node?c:String(c))}return n}
function api(u,o){o=o||{};o.credentials='same-origin';return fetch(u,o).then(function(r){if(r.status===401){login();throw 'auth'}return r.json().catch(function(){return{}}).then(function(j){if(!r.ok)throw (j.error||(j.bad?'Неверные значения: '+j.bad.join(', '):r.status));return j})})}
function err(e){if(e!=='auth')alert(e)}
function post(u,b){return api(u,{method:'POST',body:JSON.stringify(b)})}
function boot(){api('/api/me').then(dash).catch(function(e){if(e!=='auth')login()})}
function login(){var id=el('input',{placeholder:'Telegram ID',inputmode:'numeric'}),pw=el('input',{type:'password',placeholder:'Пароль'});
$('#app').replaceChildren(el('div',{cls:'box'},el('h2',{},'🔐 Вход'),id,pw,el('button',{on:{click:function(){post('/api/login',{id:id.value,password:pw.value}).then(boot).catch(err)}}},'Войти'),el('a',{href:'/license',target:'_blank'},'📄 Лицензионное соглашение')))}
var S={tab:'acc',status:'',q:'',tag:'',page:0};
function dash(){var tabs=[['acc','Аккаунты'],['usr','Пользователи'],['st','Статистика'],['cfg','Настройки'],['sup','Поддержка'],['aud','Аудит']];
var body=el('div',{});$('#app').replaceChildren(el('div',{cls:'wrap'},el('div',{cls:'bar tabs'},tabs.map(function(t){return el('button',{cls:S.tab===t[0]?'on':'',on:{click:function(){S.tab=t[0];dash()}}},t[1])})),body));
({acc:accs,usr:users,st:stats,cfg:settings,sup:support,aud:auds})[S.tab](body)}
function stSelect(all,val){var o=[''].concat(Object.keys(LBL));return el('select',{},o.map(function(v){if(!v&&!all)return null;var x=el('option',{value:v},v?LBL[v]:'все статусы');if(v===val)x.selected=true;return x}))}
function accs(root){var q=el('input',{placeholder:'Поиск…',value:S.q}),st=stSelect(true,S.status),tg=el('input',{placeholder:'тег',value:S.tag,size:8});
function go(){S.q=q.value;S.status=st.value;S.tag=tg.value;S.page=0;load()}
var rs=stSelect(false,'grey');rs.value='grey';
var rb=el('button',{on:{click:function(){api('/api/random?status='+rs.value).then(modal).catch(err)}}},'🎲 Случайный');
var tw=el('div',{cls:'tw'}),pg=el('div',{cls:'bar'}),drop=el('div',{cls:'drop'},'📂 Перетащите CSV сюда или нажмите');
var fi=el('input',{type:'file',accept:'.csv,text/csv',style:'display:none'});
function imp(f){if(!f)return;f.text().then(function(t){return api('/api/import',{method:'POST',body:t})}).then(function(r){alert('Добавлено '+r.added+', обновлено '+r.updated+', пропущено '+r.skipped);load()}).catch(err)}
drop.onclick=function(){fi.click()};fi.onchange=function(){imp(fi.files[0])};
drop.ondragover=function(e){e.preventDefault();drop.classList.add('hv')};drop.ondragleave=function(){drop.classList.remove('hv')};
drop.ondrop=function(e){e.preventDefault();drop.classList.remove('hv');imp(e.dataTransfer.files[0])};
root.append(el('div',{cls:'bar'},q,st,tg,el('button',{on:{click:go}},'Найти'),rs,rb,el('a',{href:'/api/export?status='+S.status},el('button',{cls:'g'},'⬇️ Экспорт CSV'))),drop,fi,tw,pg);
q.addEventListener('keydown',function(e){if(e.key==='Enter')go()});
function load(){var u='/api/accounts?page='+S.page+'&status='+encodeURIComponent(S.status)+'&q='+encodeURIComponent(S.q)+'&tag='+encodeURIComponent(S.tag);
api(u).then(function(d){var th=['#','Статус','account_id','g2g','Почта','Держит','Теги','Кулдаун до'];
tw.replaceChildren(el('table',{},el('tr',{},th.map(function(h){return el('th',{},h)})),d.rows.map(function(a){var tags=JSON.parse(a.tags||'[]').join(', ');
return el('tr',{cls:'r',on:{click:function(){modal(a)}}},el('td',{},a.id),el('td',{},el('span',{cls:'s '+a.status},LBL[a.status])),el('td',{},shown(a.account_id)),el('td',{},shown(a.g2g_code_id)),el('td',{},shown(a.account_email)),el('td',{},a.holder_id),el('td',{},tags),el('td',{},a.vac_until?new Date(a.vac_until*1000).toLocaleString():''))})));
var pages=Math.max(1,Math.ceil(d.total/25));pg.replaceChildren(el('button',{cls:'g',on:{click:function(){if(S.page>0){S.page--;load()}}}},'◀'),'Стр. '+(S.page+1)+'/'+pages+' · всего '+d.total,el('button',{cls:'g',on:{click:function(){if(S.page+1<pages){S.page++;load()}}}},'▶'))}).catch(err)}
load()}
function copy(t,b){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='✓';setTimeout(function(){b.textContent=o},900)})}
function modal(a){var old=document.querySelector('.mod');if(old)old.remove();
var tags=el('input',{value:JSON.parse(a.tags||'[]').join(', '),placeholder:'теги через запятую',style:'flex:1'});
var m=el('div',{cls:'mod',on:{click:function(e){if(e.target===m)m.remove()}}});
function fld(k){if(!a[k])return null;var v=shown(a[k]),b=el('button',{cls:'g'},'📋');b.onclick=function(){copy(v,b)};return el('div',{cls:'f'},el('b',{},k),el('code',{},v),b)}
function sb(s){return el('button',{cls:'g',on:{click:function(){post('/api/status',{id:a.id,status:s}).then(function(){m.remove();dash()}).catch(err)}}},LBL[s])}
var cdSel=el('select',{},CD.map(function(c){return el('option',{value:c[1]},c[0])}));
var both=shown(a.account_email||'')+'\\n'+shown(a.email_password||'');var bb=el('button',{cls:'g'},'📋 почта+пароль');bb.onclick=function(){copy(both,bb)};
var note=el('input',{value:a.additional_note||'',placeholder:'заметка',style:'flex:1'});
var content=[el('h3',{},'#'+a.id+' · '+LBL[a.status]+(a.holder_id?' · держит '+a.holder_id:'')),FIELDS.map(fld),el('div',{cls:'f'},bb),
el('div',{cls:'bar'},note,el('button',{cls:'g',on:{click:function(){post('/api/note',{id:a.id,note:note.value}).then(function(){m.remove();dash()}).catch(err)}}},'📝 Сохранить заметку')),
el('div',{cls:'bar'},'Статус:',sb('grey'),sb('green'),sb('blue'),sb('black')),
el('div',{cls:'bar'},cdSel,el('button',{on:{click:function(){post('/api/status',{id:a.id,status:'yellow',dur:+cdSel.value}).then(function(){m.remove();dash()}).catch(err)}}},'🟡 Поставить кулдаун'))];
if(a.status==='yellow')content.push(el('button',{cls:'g',on:{click:function(){post('/api/extend',{id:a.id}).then(function(){m.remove();dash()}).catch(err)}}},'⏱ +1 день'));
content.push(el('div',{cls:'bar'},tags,el('button',{on:{click:function(){post('/api/tags',{id:a.id,tags:tags.value}).then(function(){m.remove();dash()}).catch(err)}}},'Сохранить теги')));
content.push(el('div',{cls:'bar'},el('button',{cls:'g',on:{click:function(){api('/api/random?status='+a.status).then(modal).catch(err)}}},'🎲 Ещё случайный'),
el('button',{cls:'d',on:{click:function(){if(confirm('Удалить #'+a.id+' навсегда?'))post('/api/delete',{id:a.id}).then(function(){m.remove();dash()}).catch(err)}}},'🗑 Удалить'),
el('button',{cls:'g',on:{click:function(){m.remove()}}},'Закрыть')));
m.append(el('div',{cls:'mc'},content));document.body.append(m)}
function users(root){var inp=el('input',{placeholder:'Telegram ID',inputmode:'numeric'}),box=el('div',{});
root.append(el('div',{cls:'bar'},inp,el('button',{on:{click:function(){post('/api/users',{id:inp.value}).then(function(r){if(!r.ok)alert('Неверный ID');dash()}).catch(err)}}},'➕ Добавить пользователя')),box);
api('/api/users').then(function(d){var th=['ID','Имя','Сутки','Неделя','Всего','В аренде','Кулдаунов','Посл. активность',''];
box.replaceChildren(el('div',{cls:'tw'},el('table',{},el('tr',{},th.map(function(h){return el('th',{},h)})),d.users.map(function(u){
function bt(txt,cls,fn){return el('button',{cls:cls,on:{click:fn}},txt)}
return el('tr',{},el('td',{},u.telegram_id),el('td',{},(u.blocked?'🚫 ':'')+(u.name||'')),el('td',{},u.day+'/'+d.limits.day),el('td',{},u.week+'/'+d.limits.week),el('td',{},u.total),el('td',{},u.hold),el('td',{},u.cds),el('td',{},u.last_seen?new Date(u.last_seen*1000).toLocaleString():''),
el('td',{},[bt('♻️ сутки','g',function(){post('/api/user/reset',{id:u.telegram_id,kind:'day'}).then(dash).catch(err)}),' ',bt('♻️ неделя','g',function(){post('/api/user/reset',{id:u.telegram_id,kind:'week'}).then(dash).catch(err)}),' ',
bt(u.blocked?'✅ разблок.':'🚫 блок','g',function(){post('/api/user/block',{id:u.telegram_id,blocked:!u.blocked}).then(dash).catch(err)}),' ',
bt('🗑','d',function(){if(confirm('Удалить '+u.telegram_id+'?'))api('/api/users?id='+u.telegram_id,{method:'DELETE'}).then(dash).catch(err)})]))}))))}).catch(err)}
function stats(root){api('/api/stats').then(function(s){function c(t,v){return el('div',{},el('b',{},v),t)}
root.append(el('div',{cls:'cards'},c(LBL.grey,s.grey),c(LBL.green,s.green),c(LBL.yellow,s.yellow),c(LBL.blue,s.blue),c(LBL.black,s.black),c('⏰ Кулдаун кончится за 24 ч',s.soon),c('📤 Выдано за 24 ч',s.takes24),c('👥 Пользователей',s.users)))}).catch(err)}
function form(root,keys,multi){api('/api/settings').then(function(S){var inputs={};var box=el('div',{});
keys.forEach(function(k){var i=multi&&multi.indexOf(k[0])>=0?el('textarea',{}):el('input',{style:'width:100%'});i.value=S[k[0]];inputs[k[0]]=i;box.append(el('label',{},k[1]),i)});
box.append(el('div',{cls:'bar'},el('button',{on:{click:function(){var b={};for(var k in inputs)b[k]=inputs[k].value;post('/api/settings',b).then(function(){alert('Сохранено')}).catch(err)}}},'💾 Сохранить')));root.append(box)}).catch(err)}
function settings(root){var demo=el('div',{});api('/api/demo').then(function(d){var on=el('button',{cls:d.enabled?'d':'g',on:{click:function(){post('/api/demo',{enabled:!d.enabled}).then(function(x){d.enabled=x.enabled;on.textContent=d.enabled?'🛑 Выключить демо-режим':'▶️ Включить демо-режим';on.className=d.enabled?'d':'g';status.textContent=d.enabled?'Сейчас Telegram отвечает этому ID как обычному пользователю.':'Сейчас включён обычный режим администратора.'}).catch(err)}}},d.enabled?'🛑 Выключить демо-режим':'▶️ Включить демо-режим'),status=el('span',{},d.enabled?'Сейчас Telegram отвечает этому ID как обычному пользователю.':'Сейчас включён обычный режим администратора.');demo.append(el('h3',{},'🎭 Демонстрационный режим'),status,el('div',{cls:'bar'},on))}).catch(err);root.append(demo,el('h3',{},'Лимиты, цены и текст для незнакомых'));
form(root,[['day_limit','Лимит аккаунтов в сутки'],['week_limit','Лимит аккаунтов в неделю'],['price_day','Цена сброса суточного лимита'],['price_week','Цена сброса недельного лимита'],['welcome_text','Текст, который видят незнакомые пользователи бота'],['bot_menu_text','Приветствие в меню'],['bot_find_text','Подсказка поиска'],['bot_empty_text','Текст при отсутствии аккаунтов'],['bot_limit_text','Текст при достижении лимита']],['welcome_text','bot_menu_text','bot_find_text','bot_empty_text','bot_limit_text']);
var tx=el('textarea',{placeholder:'Текст рассылки всем пользователям'});
root.append(el('h3',{},'📢 Рассылка'),tx,el('div',{cls:'bar'},el('button',{on:{click:function(){if(!tx.value)return;post('/api/broadcast',{text:tx.value}).then(function(r){alert('Отправлено: '+r.ok+'/'+r.total);tx.value=''}).catch(err)}}},'Отправить всем')))}
function support(root){root.append(el('h3',{},'🛟 Поддержка'),el('div',{cls:'lock'},'Этот текст пользователи видят в разделе «Поддержка», а контакт — при покупке сброса лимитов.'));
form(root,[['support_contact','Контакт поддержки (например @flight_san)'],['support_text','Текст раздела «Поддержка»']],['support_text'])}
function auds(root){var box=el('div',{cls:'tw'});root.append(box);api('/api/audit').then(function(l){box.replaceChildren(el('table',{},el('tr',{},['Время','Кто','Действие','Аккаунт','Изменение'].map(function(h){return el('th',{},h)})),l.map(function(a){return el('tr',{},el('td',{},a.created_at),el('td',{},a.admin_id||'cron'),el('td',{},a.action),el('td',{},a.account_id||''),el('td',{},(a.old_value?a.old_value+' → ':'')+(a.new_value||'')))})))})}
boot();
<\/script></body></html>`])));
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
