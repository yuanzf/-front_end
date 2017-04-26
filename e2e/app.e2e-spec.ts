import { EduPage } from './app.po';

describe('edu App', () => {
  let page: EduPage;

  beforeEach(() => {
    page = new EduPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
