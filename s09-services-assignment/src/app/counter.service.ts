export class CounterService {
  activations = 0;
  deactivations = 0;
  onActivation() {
    this.activations++;
    this.logvalues();
  }
  onDeactivation() {
    this.deactivations++;
    this.logvalues();
  }
  logvalues() {
    console.log(
      `Aktywacji: ${this.activations}, deaktywacji: ${this.deactivations}`
    );
  }
}
