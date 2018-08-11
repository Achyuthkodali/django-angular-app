import { DjangoAppPage } from './app.po';

describe('django-app App', function() {
  let page: DjangoAppPage;

  beforeEach(() => {
    page = new DjangoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
