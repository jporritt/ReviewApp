import { ReviewApplicationPage } from './app.po';

describe('review-application App', function() {
  let page: ReviewApplicationPage;

  beforeEach(() => {
    page = new ReviewApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
