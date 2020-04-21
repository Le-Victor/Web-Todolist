describe('todo test', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto('http://localhost:8080');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title-1', async function() {          
        expect(await page.title()).to.eql('Todo List');
    })
  });
