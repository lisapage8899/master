import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', function() {
  it('Home page title test', async () => {
    console.log('Home page title test');
    expect(await browser.getCurrentUrl()).toContain('localhost');
  });
});