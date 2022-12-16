import { lazy } from "react";

export default function lazyload(path, namedExport = null) {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    }
    return promise.then((module) => ({ default: module[namedExport] }));
  });
}
