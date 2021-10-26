export class Photo {

  private _id: number;
  private _albumId: number;
  private _url: string;
  private _thumbnailUrl: string;

  constructor(id: number, albumId: number, url: string, thumbnailUrl: string) {
    this._id = id;
    this._albumId = albumId;
    this._url = url;
    this._thumbnailUrl = thumbnailUrl;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get albumId(): number {
    return this._albumId;
  }

  set albumId(value: number) {
    this._albumId = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get thumbnailUrl(): string {
    return this._thumbnailUrl;
  }

  set thumbnailUrl(value: string) {
    this._thumbnailUrl = value;
  }
}
