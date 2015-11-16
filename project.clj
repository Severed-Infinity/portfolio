(defproject portfolio "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 ;[org.omcljs/om "1.0.0-alpha22"]
                 [figwheel-sidecar "0.5.0-1"
                  :scope "provided"
                  #_(:exclusions [org.codehaus]
                     .plexus/plexus-utils
                     joda-time clj-time
                     ring/core
                     ring/ring-core
                     http-kit)]
                 [com.stuartsierra/component "0.3.0"]
                 [co.paralleluniverse/pulsar "0.7.3"]
                 [co.paralleluniverse/comsat-httpkit "0.5.0"]
                 [domina "1.0.3"]
                 [hiccups "0.3.0"]
                 [org.clojars.magomimmo/shoreleave-remote "0.3.1-SNAPSHOT"]
                 [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1-SNAPSHOT"]
                 [javax.servlet/servlet-api "2.5"]]
  :java-agents [[co.paralleluniverse/quasar-core "0.7.3"]]
  :plugins [[lein-cljsbuild "1.1.1"]])
