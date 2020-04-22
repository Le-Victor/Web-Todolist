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

    it('should new todo correct', async function() {
      await page.click('#header_icon', {delay: 500});
      await page.type('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.content > div > input[type=text]', 'new todo item', {delay: 50});
      await page.click('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > button.ui.icon.positive.right.labeled.button')
      let todoList = await page.waitFor('#root > div > div.ui.centered.relaxed.grid.container > div:nth-child(3) > div > div.row > div');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('div').textContent, todoList);
      expect(expectInputContent).to.eql('new todo item');
    }) 

    it('should done todo correct', async function() {
      let icon_class = await page.evaluate('document.querySelector("#\31  > i.ui.circle.outline.icon")')
      expect(icon_class).to.eql('ui circle outline icon')
      await page.click('document.querySelector("#\31  > i.ui.circle.outline.icon")')
      let new_icon_class = await page.evaluate('document.querySelector("#\31  > i.ui.circle.outline.icon")')
      expect(new_icon_class).to.eql('ui check circle outline icon')

      // let icon_class = await page.evaluate('document.querySelector(".ui circle outline icon")')
      // expect(icon_class).to.eql('ui circle outline icon')
      // await page.click('.ui circle outline icon')
      // let new_icon_class = await page.evaluate('document.querySelector(".ui check circle outline icon")')
      // expect(new_icon_class).to.eql('ui check circle outline icon')
    })


  });
