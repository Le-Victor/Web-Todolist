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

    it('should render all content correct', async function() {
      let todoList = await page.waitFor('#root > div > div.ui.centered.relaxed.grid.container > div:nth-child(3) > div > div.row > div');
      const expectContent0 = await page.evaluate(todoList => todoList.children[0].querySelector('div').textContent, todoList);
      const expectContent1 = await page.evaluate(todoList => todoList.children[1].querySelector('div').textContent, todoList);
      expect(expectContent0).to.eql('Restful API homework');
      expect(expectContent1).to.eql('update homework');
    }) 
  });
