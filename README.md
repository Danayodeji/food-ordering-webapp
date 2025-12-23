# Food Delivery — Frontend

This repository contains the frontend for the Food Delivery project — a React application built with Vite. The app provides a menu of food items, cart management, and an order checkout flow.

Summary of what I inspected to ensure accuracy:
- Routes: `/`, `/cart`, `/order` (see `src/App.jsx`)
- Local product data: `src/assets/assets.js` exports `food_list` used by the app
- State: Context-based (`src/context/Storecontext.jsx`) with `addToCart`, `removeFromCart`, and `getTotalCartAmount`
- Currency displayed as Nigerian Naira (₦) and a hard-coded delivery fee (₦2,000) in `PlaceOrder`
- Key components: `Navbar`, `Footer`, `AppDownload`, `LoginPopUp`, `FoodDisplay`, `FoodItem`

## Quick Links
- File: `src/main.jsx` — app bootstrap and providers
- File: `src/App.jsx` — routes and global layout
- File: `src/context/Storecontext.jsx` — cart + products state
- File: `src/assets/assets.js` — local product & asset data
- File: `src/pages/PlaceOrder/PlaceOrder.jsx` — checkout UI and totals

## Tech stack
- React 19
- Vite
- react-router-dom (v7)
- Context API

## Getting started

Prerequisites
- Node.js 16+
- npm (or yarn/pnpm)

Install and run

```powershell
cd frontend
npm install
npm run dev
```

Open the URL printed by the dev server (usually `http://localhost:5173`).

Build for production

```powershell
npm run build
npm run preview
```

## What’s special about this project
- Uses local asset data in `src/assets/assets.js` (`food_list`) — no backend required to run locally.
- Cart state is stored in `StoreContext` as an object mapping product IDs to quantities.
- Checkout totals are computed via `getTotalCartAmount()`; `PlaceOrder` applies a flat delivery fee of ₦2,000 when subtotal > 0.

## Routes and usage
- `/` — Home and menu: browse categories and items
- `/cart` — Review cart items and adjust quantities
- `/order` — Fill delivery information and view totals; click "PROCEED TO PAYMENT" to continue (UI placeholder)

## Scripts (from `package.json`)
- `npm run dev` — start Vite dev server
- `npm run build` — produce production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## How to adapt or extend
- To use a backend API, add `VITE_API_URL` in a `.env` file and replace usages of `food_list` with API calls (recommend copying current `food_list` shape).
- To change currency or delivery fee, update `PlaceOrder.jsx` and presentation components that format prices.
- To persist cart across reloads, add localStorage logic inside `Storecontext.jsx`.

## Contributing
- Follow existing component patterns and keep styles colocated in component folders.
- Run `npm run dev` and verify the flows: add items, open `/cart`, and place an order at `/order`.

## Troubleshooting
- If you see missing image or import errors, ensure `src/assets/*` images are present and that imports are not renamed.
- If the dev server fails, run:

```powershell
rm -r node_modules package-lock.json
npm install
```

Windows tip: use PowerShell and run `Remove-Item -Recurse node_modules, package-lock.json` instead of `rm -r`.

## Next steps I can help with
- Commit the updated `frontend/README.md` and push to a branch (amend or new commit)
- Add screenshots or a quick demo GIF to `public/` and embed them in the README
- Add tests or a CI workflow

If you want me to commit the README update, tell me whether to amend the previous commit or create a new one, and confirm the branch name (default `main`).

