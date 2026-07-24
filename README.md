# Dil Atölyesi

Kişisel bir konsept proje: dil öğretimine yönelik kelime kartları, ders rezervasyon formu ve öğrenci yorumları içeren tek sayfalık React uygulaması.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## İçerik güncelleme

- `src/data/words.json`: kelime kartları (front/back)
- `src/data/testimonials.json`: öğrenci yorumları — italki profilinden gerçek yorumlarla değiştir
- `src/components/Header.jsx`: başlık ve açıklama metni

## Deploy (Vercel)

1. Projeyi GitHub'a push et.
2. [vercel.com](https://vercel.com) üzerinden GitHub reposunu import et.
3. Framework preset: **Vite**. Build command: `npm run build`, Output directory: `dist`.
