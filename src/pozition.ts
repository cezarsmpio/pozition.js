declare let Promise: any;
declare let navigator: Navigator;

const { geolocation } = navigator;

const current = (options = {} as PositionOptions): Promise<Geolocation> => {
  return new Promise((resolve, reject) => {
    return geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const watch = (options = {} as PositionOptions): Promise<Geolocation> => {
  return new Promise((resolve, reject) => {
    return geolocation.watchPosition(resolve, reject, options);
  });
};

const clear = (id: number): void => {
  return geolocation.clearWatch(id);
};

export {
  current,
  watch,
  clear
};