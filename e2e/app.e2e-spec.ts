import { IfthenelesePage } from './app.po';

describe('ifthenelese App', () => {
  let page: IfthenelesePage;

  beforeEach(() => {
    page = new IfthenelesePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
