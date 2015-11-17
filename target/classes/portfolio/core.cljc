(ns ^:figwheel-always portfolio.core
  (:require
   #?(:clj [compojure.core :refer :all])
   #?(:clj
           [compojure.handler :as handler])
   #?(:clj
           [compojure.route :as route])
   #?(:clj
           [org.httpkit.server :as server])
   #?(:clj
           [shoreleave.middleware.rpc :refer [defremote wrap-rpc]])
   #?(:cljs [domina.events :as ev])
   #?(:cljs [domina.xpath :as dxp])
   #?(:cljs [domina :as dom])
   #?(:cljs [hiccups.runtime :as hicrt])
   #?(:cljs [shoreleave.remotes.http-rpc :refer [remote-callback]])
   #?(:cljs (cljs.reader :refer [read-string])))
  #?(:cljs (:require-macros [hiccups.core :as hic])))

;#?(:cljs (.write js/document "david you did it?"))

;(enable-console-print!)

;(println "Hello world! coming from core cljc")

#?(:clj (defremote calculate [quantity price tax discount]
          (-> (* quantity price)
            (* (+ 1 (/ tax 100)))
            (- discount))))

#?(:clj (defroutes app-routes
          (GET "/" [] "<p>hello world</p>")
          (route/resources "/")
          (route/not-found "Page not found.")))

#?(:clj (def handler (handler/site app-routes)))

#?(:clj (def app (-> (var handler)
                   (wrap-rpc)
                   (handler/site))))

#?(:clj (defonce server (atom nil)))

#?(:clj (defn stop-server []
          (when-not (nil? @server)
            (@server :timeout 100)
            (reset! server nil))))

#?(:clj (defn -main []
          (reset! server (server/run-server
                           app {:port 8080}))))

#?(:cljs (defn validate-form
           []
           (let [email    (dom/by-id "email")
                 password (dom/by-id "password")]
             (if (and (> (count (dom/value email)) 0)
                   (> (count (dom/value password)) 0))
               true
               (do (js/alert "Please, complete the form!")
                   false)))))

#?(:cljs (defn calculate
           []
           (let [quantity (read-string (dom/value (dom/by-id "quantity")))
                 price    (read-string (read-string (dom/value (dom/by-id "price"))))
                 tax      (read-string (dom/value (dom/by-id "tax")))
                 discount (read-string (dom/value (dom/by-id
                                                    "discount")))]
             (remote-callback :calculate [quantity price tax discount]
               #(dom/set-value! (dom/by-id "total") (.toFixed 2))))))

#?(:cljs (dom/append!
           (dxp/xpath "//body")
           (hic/html [:div "Hello World!"])))

#?(:cljs (defn add-help []
           (dom/append! (dom/by-id "shoppingForm")
             (hic/html [:div.help "Click to Calculate"]))))

#?(:cljs (defn remove-help []
           (dom/destroy! (dom/by-class "help"))))

#?(:cljs (defn ^:export init []
           (when (and js/document
                   (aget js/document "getElementById"))
             (ev/listen! (dom/by-id "calc") :click calculate)
             (ev/listen! (dom/by-id "calc") :mouseover add-help)
             (ev/listen! (dom/by-id "calc") :mouseout remove-help))))


;#?(:cljs (set! (.-onload js/window) init))
