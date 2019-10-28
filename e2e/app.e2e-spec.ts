import { CodecPage } from './app.po';

describe('codec App', function() {
  let page: CodecPage;

  beforeEach(() => {
    page = new CodecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
