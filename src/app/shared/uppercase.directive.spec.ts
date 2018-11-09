import { UppercaseDirective } from './uppercase.directive';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const element = { nativeElement: { style: {} } };
    const directive = new UppercaseDirective(element);
    expect(directive).toBeTruthy();
    expect(element.nativeElement.style['text-transform']).toBe('uppercase');
  });
});
