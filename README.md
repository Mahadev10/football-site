# Messi Farewell — Java Maven Web Application

A simple responsive Messi fan tribute website packaged as a Maven WAR for Apache Tomcat. The site uses static HTML, CSS and JavaScript, so no servlet or database is required.

## Requirements
- JDK 17 or later
- Maven 3.8+
- Apache Tomcat 10.1+ (static web content works on Tomcat 9 as well)

## Build
From the directory containing `pom.xml`:

```bash
mvn clean package
```

The WAR is created at `target/messi-farewell.war`.

## Deploy to Tomcat
Copy `target/messi-farewell.war` to Tomcat's `webapps/` directory, then start Tomcat.

Linux example:

```bash
cp target/messi-farewell.war /opt/tomcat/webapps/
/opt/tomcat/bin/startup.sh
```

Open `http://localhost:8080/messi-farewell/`.

If Tomcat runs on another machine, replace `localhost` with that machine's hostname or IP and ensure port 8080 is reachable. The Google Fonts import requires internet access; the page otherwise uses fallback fonts.
>>>>>>> ed40ce5 (initial commit)
