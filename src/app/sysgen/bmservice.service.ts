export class BmserviceService {

  data: string [] = [];

  addData(item: string) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}
