# Infinite Logo Scroll App

Dit project is een eenvoudige React-applicatie die een eindeloze animatie van logo's weergeeft. Het is gebouwd met Next.js en maakt gebruik van Tailwind CSS voor styling.

## Inhoud

- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Structuur](#structuur)
- [Aanpassingen](#aanpassingen)

## Installatie

Volg deze stappen om het project lokaal op te zetten:

1. **Kloon de repository:**

   ```bash
   git clone https://github.com/Yusuf013/automatic_slider_poc
   ```

2. **Installeer de afhankelijkheden:**

   ```bash
   npm install
   ```

3. **Start de ontwikkelserver:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) om de app in je browser te bekijken.

## Gebruik

De applicatie toont een eindeloze animatie van logo's. Je kunt de animatie aanpassen door de logo's in de `InfiniteLogoScroll.tsx` component te wijzigen.

## Structuur

- **`app/components/InfiniteLogoScroll.tsx`**: Bevat de `InfiniteLogoScroll` component die verantwoordelijk is voor het weergeven van de logo's.
- **`app/globals.css`**: Bevat de globale CSS-stijlen en animaties.
- **`app/layout.js`**: Definieert de basis lay-out van de applicatie, inclusief lettertypen.
- **`app/page.tsx`**: De hoofdpagina van de applicatie die de `InfiniteLogoScroll` component weergeeft.

## Aanpassingen

- **Logo's wijzigen**: Voeg nieuwe logo's toe of verwijder bestaande logo's in de `logos` array binnen `InfiniteLogoScroll.tsx`.
- **Animaties aanpassen**: Pas de animaties aan in `app/globals.css` door de `@keyframes scroll` en `.animate-scroll` klassen te wijzigen.

