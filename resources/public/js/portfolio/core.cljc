(ns portfolio.core
  (:require
   #?(:clj [compojure.core :refer :all])
   #?(:clj
           [compojure.handler :as handler])
   #?(:clj
           [compojure.route :as route])
   #?(:clj
           [org.httpkit.server :as server]))
  (:use #?(:cljs [domina :only [by-id value]])))

;#?(:cljs (.write js/document "david you did it?"))

;(enable-console-print!)

;(println "Hello world! coming from core cljc")

#?(:clj (defroutes app-routes
          (GET "/" [] "<p>hello world</p>")
          (route/resources "/")
          (route/not-found "Page not found.")))

#?(:clj (def handler (handler/site app-routes)))

#?(:clj (defonce server (atom nil)))

#?(:clj (defn stop-server []
          (when-not (nil? @server)
            (@server :timeout 100)
            (reset! server nil))))

#?(:clj (defn -main []
          (reset! server (server/run-server
                           handler {:port 8080}))))

#?(:cljs (defn validate-form
           []
           (let [email    (by-id "email")
                 password (by-id "password")]
             (if (and (> (count (value email)) 0)
                   (> (count (value password)) 0))
               true
               (do (js/alert "Please, complete the form!")
                   false)))))
