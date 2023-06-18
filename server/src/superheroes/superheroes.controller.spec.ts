import {Test, TestingModule} from '@nestjs/testing';
import * as request from 'supertest';
import {app} from '../main';
import {AppModule} from '../app.module';
import {HttpStatus} from '@nestjs/common';
import {SuperheroesController} from "./superheroes.controller";
import {SuperheroesModule} from "./superheroes.module";
import {FileModule} from "../file/file.module";

describe('SuperheroesController', () => {
  let controller: SuperheroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SuperheroesModule, AppModule, FileModule],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it(`should return all superheroes (max 5)`, async () => {
    const res = await request(app.getHttpServer())
        .get('/superheroes?offset=0&count=5')
        .expect(HttpStatus.OK)

    const allSuperheroes = res.body
    console.log(allSuperheroes)
  });


  it(`should return one superhero by requested id`, async () => {
    const res = await request(app.getHttpServer())
        .get(`/superheroes/34`)
        .expect(HttpStatus.OK)

    const requestedSuperhero = res.body
    console.log(requestedSuperhero)
  });


  it(`should update superhero by id`, async () => {
    const res = await request(app.getHttpServer())
        .put(`/superheroes/34`)
        .send({
            realName: 'Test real name'
        })
        .expect(HttpStatus.OK)

    const requestedSuperhero = res.body
    console.log(requestedSuperhero)
  });


  it(`should return superhero changes by id`, async () => {
    const res = await request(app.getHttpServer())
        .put(`/superheroes/34`)
        .send({
            realName: 'Clark Kent'
        })
        .expect(HttpStatus.OK)

    const requestedSuperhero = res.body
    console.log(requestedSuperhero)
  });


  /*it(`should delete superhero by id`, async () => {
    const res = await request(app.getHttpServer())
        .delete(`/superheroes/34`)
        .expect(HttpStatus.OK)
  });*/
});
