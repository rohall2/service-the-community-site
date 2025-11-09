# Service the Community Inc. — Website

A ready-to-deploy Next.js + Tailwind project.

## Local Dev
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
1. Create a new project at https://vercel.com/new and import this repo.
2. After first deploy, go to Project → Settings → **Domains** → Add `servicethecommunity.org`.
3. In Namecheap → Domain → Advanced DNS, set:
   - **A** record: host `@` → value `76.76.21.21`
   - **CNAME** record: host `www` → value `cname.vercel-dns.com`
4. Wait a few minutes; SSL is automatic.
