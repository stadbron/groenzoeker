import { getStored, setStored } from '@/lib/utils/storage';

export default class ApiResource {
    public name: string;
    public endpoint: string;
    public data: any;

  constructor(name: string) {
    this.name = name;
    this.endpoint = this.getStored('endpoint');
    this.data = this.getStored('data');

    if (!this.data && this.endpoint) {
      this.refreshData();
    }
  }

  public getFieldIdentifier(field: string) {
    return [
      'api_resource',
      this.name,
      field,
    ].join('_').toLowerCase();
  }

  public getStored(identifier: string) {
    return getStored(this.getFieldIdentifier(identifier));
  }

  public setStored(identifier: string, value: any) {
    return setStored(this.getFieldIdentifier(identifier), value);
  }

  public setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
    this.setStored('endpoint', endpoint);
  }

  public setData(data: any) {
    this.data = data;
    this.setStored('data', data);
  }

  public refreshData() {
    // axios.get(this.endpoint).then(response => {
    //   this.setData(response.data)
    // })
    // console.log('http', http)
  }
}
