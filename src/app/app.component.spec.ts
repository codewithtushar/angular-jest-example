import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

const params = {
  addFunctionParams : { param1: 1, param2: 2},
  addFunctionResult : 3
}
describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent
  });

  let spectator: Spectator<AppComponent>;

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });


  it('should test add function', () => {
    const app = spectator.component;
    const results = app.add(params.addFunctionParams.param1, params.addFunctionParams.param2);
    expect(results).toBe(params.addFunctionResult);
  });


});
