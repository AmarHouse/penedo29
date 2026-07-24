# Plano de Animações Elegantes — Penedo29

## Biblioteca: anime.js v4 (WAAPI engine, 3KB gzip)
CDN: `https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm`

---

## 1. Hero — Entrada Coreografada

**O que:** Logo + eyebrow + subtitle + linha entram com sequência cinematográfica.

**Como:**
- Logo: `scale(0.8) → 1` + `opacity(0 → 1)` com ease spring (duração 1.2s)
- Eyebrow: `translateY(20px) → 0` + fade (delay 0.3s)
- Subtitle: `translateY(15px) → 0` + fade (delay 0.6s)
- Linha: `scaleX(0 → 1)` (delay 0.9s)

**Resultado:** Abertura que parece um filme — cada elemento nasce no seu momento.

---

## 2. Scroll Reveal com Stagger

**O que:** Cards da galeria e equipe entram com delay orgânico baseado na posição, não manual.

**Como:**
- IntersectionObserver detecta a seção entrando no viewport
- `waapi.animate()` com `delay: stagger(80, { from: 'center' })` para galeria
- Cards aparecem de dentro pra fora ( centro → bordas )
- Equipe: stagger vertical (cima → baixo)

**Resultado:** Replaces os `reveal-delay-*` manuais com stagger automático e orgânico.

---

## 3. Light Dust — Caminhos Orgânicos

**O que:** Partículas seguem curvas bezier, não linhas retas.

**Como:**
- Cada partícula: `translateX` + `translateY` com valores diferentes por keyframe
- Ease: `inOut(1.5)` para movimento suave
- Alguns particles: `rotate` sutil (15-30°) para variância
- Loop com `alternate: true` para ida e volta

**Resultado:** Partículas que parecem poeira de luz flutuando naturalmente.

---

## 4. Gallery Hover — Lift + Glow

**O que:** Hover nos cards da galeria com elevação suave e brilho sutil.

**Como:**
- `waapi.animate(card, { translateY: -6, boxShadow: '0 12px 40px rgba(21,58,84,0.12)', ease: 'out(2)', duration: 400 })`
- Mouse leave: reverte com `inOut(1)`
- Imagem dentro: `scale(1.03)` suave

**Resultado:** Hover que parece tátil, não binário.

---

## 5. Logo Hero — Float com Física

**O que:** Logo flutua com movimento que parece ter massa/inércia.

**Como:**
- `waapi.animate('.hero-title img', { translateY: [-8, 0], duration: 2000, loop: true, alternate: true, ease: 'inOut(1.5)' })`
- Mais suave que CSS linear — tem aceleração/desaceleração natural

**Resultado:** Float que parece orgânico, não robótico.

---

## 6. Team Avatars — Float Escalonado

**O que:** Fotos dos membros flutuam com delay baseado no índice.

**Como:**
- `waapi.animate('.team-card .avatar', { translateY: [-5, 0], duration: 2200, loop: true, alternate: true, delay: stagger(300), ease: 'inOut(1.2)' })`

**Resultado:** Onda suave nos avatares, não todos juntos.

---

## 7. Números dos Stats — Counter Animate

**O que:** Números contam de 0 ao valor final quando a seção aparece.

**Como:**
- IntersectionObserver detecta `.stat-number`
- `waapi.animate()` com `textContent` modifier que faz counter
- Ease: `out(3)` — começa rápido, desacelera

**Resultado:** 2015, 20+, 8, 97 aparecem contando — impacto visual.

---

## 8. Botão Voltar ao Topo — Appear com Spring

**O que:** Botão aparece com easing spring quando scroll passa 500px.

**Como:**
- `waapi.animate('.back-top', { scale: [0, 1], opacity: [0, 1], ease: 'out(2.5)', duration: 500 })`

**Resultado:** Botão nasce com elasticidade, não aparece seco.

---

## Ordem de Implementação

| # | Efeito | Impacto | Esforço |
|---|--------|---------|---------|
| 1 | Hero entrada coreografada | Alto | Baixo |
| 6 | Team avatars float | Médio | Baixo |
| 3 | Dust orgânico | Médio | Baixo |
| 2 | Scroll stagger | Alto | Médio |
| 5 | Logo float com física | Baixo | Baixo |
| 7 | Stats counter | Alto | Médio |
| 4 | Gallery hover | Médio | Baixo |
| 8 | Botão spring | Baixo | Baixo |

**Prioridade sugerida:** 1 → 6 → 3 → 2 → 7 → 4 → 5 → 8
