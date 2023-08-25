const isProd = process.env.NODE_ENV === "production";

export default function imageLoader({ src }) {
  return isProd ? `blog${src}` : src;
}
