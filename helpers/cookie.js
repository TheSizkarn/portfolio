import cookie from "cookie"
export function parseCookies(req) {
  if (typeof window !== 'undefined')
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}