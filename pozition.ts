declare let Promise: any;

const { geolocation } = navigator;

const current = (options = <PositionOptions>{}) => {
  return new Promise((resolve, reject) => {
    return geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const watch = (options = <PositionOptions>{}) => {
  return new Promise((resolve, reject) => {
    return geolocation.watchPosition(resolve, reject, options);
  });
};

const clear = (id: number) => {
  return geolocation.clearWatch(id);
};

export {
  current,
  watch,
  clear
};