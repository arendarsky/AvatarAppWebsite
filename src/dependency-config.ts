import 'reflect-metadata';
import { Container } from 'inversify';
import SetSemifinalistService from "@/services/SetSemifinalistService";
import {IBaseService} from "@/services/BaseService";

let container: Container = new Container();

container.bind<IBaseService>("SetSemifinalistService").to(SetSemifinalistService);

export {
  container
};
