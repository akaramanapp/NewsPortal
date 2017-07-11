import { NewsPortalPage } from './app.po';

describe('news-portal App', function() {
  let page: NewsPortalPage;

  beforeEach(() => {
    page = new NewsPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
