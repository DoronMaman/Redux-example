import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {TagServices} from './tag.services';
import { Tag } from '../models/tag';

// import { Hero } from './hero';
// import { HeroesService } from './heroes.service';
// import { HttpErrorHandler } from '../http-error-handler.service';
// import { MessageService } from '../message.service';

describe('HeroesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let tagService: TagServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        tagService
      ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    tagService = TestBed.get(tagService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// HeroService method tests begin ///

  describe('#getAll', () => {
    let expectedTags: Tag[];

    beforeEach(() => {
        tagService = TestBed.get(TagServices);
        expectedTags = [
        { id: 8, name: 'location/North America/United States/Ashburn' ,parentId:7},
        { id: 21, name: 'location/Europe/France/Paris' ,parentId:17},
       ] as Tag[];
    });

    it('should return expected heroes (called once)', () => {

        tagService.getAll(1).subscribe(
        tags => expect(tags).toEqual(expectedTags, 'should return expected heroes'),
        fail
      );

      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne('http://doron.shieldiotcloud.com:9000/api/tag/get?appId=1');
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedTags);
    });

;

    // This service reports the error but finds a way to let the app keep going.



  });

  describe('#updateHero', () => {
    // Expecting the query form of URL so should not 404 when id not found
   



    // This service reports the error but finds a way to let the app keep going.
  
  });

  // TODO: test other HeroService methods
});
