const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('file:///E:/VMs/Pasta%20Compartilhada/AI%20Workflows/SiteForge/sites/penedo29/index.html');
    await page.waitForTimeout(2000);

    // Screenshot hero
    await page.screenshot({ path: 'test-hero.png' });

    // Scroll to trigger reveals
    for (let i = 0; i < 15; i++) {
        await page.mouse.wheel(0, 600);
        await page.waitForTimeout(400);
    }
    await page.waitForTimeout(1000);

    // Full page after scroll
    await page.screenshot({ path: 'test-scrolled.png', fullPage: true });

    // Check console errors
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    await browser.close();
    console.log('Done');
})();
