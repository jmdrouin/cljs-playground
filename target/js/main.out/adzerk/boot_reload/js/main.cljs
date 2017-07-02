(ns adzerk.boot-reload.js.main (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:60146" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})