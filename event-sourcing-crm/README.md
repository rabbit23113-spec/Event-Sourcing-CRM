[crm_system_design (2).drawio](https://github.com/user-attachments/files/29223353/crm_system_design.2.drawio)# Event Sourcing CRM

Данный проект представляет собой MVP CRM, спроектированную на микросервисной архитектуре и коммуникацией посредством брокера сообщений.

---

## Описание

Проект представляет собой CRM с минимальным рабочим функционалом для управления лидами, сделками, клиентами и задачами.

Проект включает в себя:
- микросервисную архитектуру
- event-driven взаимодействие
- реализацию некоторых паттернов проектирования распределенных систем

---

## Функциональность

- Управление лидами, сделками, клиентами и задачами
- минимальный RBAC: sales/manager/administrator
- Асинхронное взаимодействие сервисов через события
- Журнал-аудит действий

---

## Архитектура

Система построена на микросервисах, взаимодействующих между собой через событийную шину.

В качестве брокера сообщений я выбрал **RabbitMQ**, так как этот брокер сообщений обеспечивает более низкую сложность эксплуатации в сравнении с Kafka.
Для кэширования выбран Redis за счет быстрого доступа к данным.


### Полный список сервисов:

- **API Gateway** — точка входа в приложение по HTTP, отвечает за маршрутизацию и обращение в микросервисы.
- **Auth Sessions Service** — осуществление аутентификации (пока что) только через JWT. В будущем будет добавлен вход через Google за счет технологии OAuth.
- **Events Service** - сервис, отвечающий за создание событий из других микросервисов в базе данных. Необходим для поддержки наглядного журнала аудита.
- **Leads Service** - сервис лидов.
- **Clients Service** - сервис клиентов.
- **Deals Service** - сервис сделок.
- **Tasks Service** - сервис задач.
- **Notes Service** - сервис заметок.
- **Users Service** - сервис пользователей.

### Типы взаимодействия:

- Синхронное: REST HTTP
- Асинхронное: RabbitMQ

### Используемые паттерны:

- Event-driven architecture
- API Gateway
- Кэширование Redis

---

## Стек технологий

### Backend
- Фреймворк NestJS
- Язык программирования TypeScript
- PostgreSQL
- Redis

### Брокер сообщений
- RabbitMQ

### Инфраструктура
- Docker

### Frontend (временно в стадии разработки)
- React
- TypeScript

---

## Пример потока событий

[Uploading <mxfile host="Electron">
  <diagram name="Страница-1" id="sp3_g_eNQcJEBU8lNr31">
    <mxGraphModel dx="471" dy="286" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-3" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=20;" value="sign up flow" vertex="1">
          <mxGeometry height="30" width="200" x="255.25" y="260" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-5" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="http://localhost:13050/api/auth/signup" vertex="1">
          <mxGeometry height="30" width="190" x="50" y="351.61" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-12" parent="1" style="outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.customer_gateway;fillColor=#4BCFA4;gradientColor=none;fillStyle=auto;gradientDirection=north;strokeColor=#FFFF99;perimeterSpacing=1;strokeWidth=7;" value="" vertex="1">
          <mxGeometry height="28" width="28" x="350" y="350" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-13" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="API Gateway" vertex="1">
          <mxGeometry height="21" width="61" x="333.5" y="378" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-17" parent="1" style="sketch=0;outlineConnect=0;fontColor=#000000;fillColor=#fa6800;strokeColor=#C73500;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.mq_broker;" value="" vertex="1">
          <mxGeometry height="24.77" width="28" x="500" y="351.61" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-18" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="RabbitMQ" vertex="1">
          <mxGeometry height="21" width="50" x="489" y="378" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-19" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="POST" vertex="1">
          <mxGeometry height="20" width="20" x="283.5" y="350" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-20" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="authMicroservice: signUp" vertex="1">
          <mxGeometry height="10" width="61" x="410" y="350" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-22" edge="1" parent="1" style="endArrow=classic;startArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="250" y="363.9" as="sourcePoint" />
            <mxPoint x="340" y="363.9" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-23" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="JWT Tokens" vertex="1">
          <mxGeometry height="20" width="20" x="283.5" y="361.61" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-24" edge="1" parent="1" style="endArrow=classic;startArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="390" y="363.92999999999995" as="sourcePoint" />
            <mxPoint x="490" y="364" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-26" edge="1" parent="1" style="endArrow=classic;startArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="513.83" y="470" as="sourcePoint" />
            <mxPoint x="513.83" y="410" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-28" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="JWT Tokens" vertex="1">
          <mxGeometry height="20" width="29.5" x="425.75" y="361.61" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-29" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="JWT Tokens" vertex="1">
          <mxGeometry height="20" width="20" x="519" y="430" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-31" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="Sign Up" vertex="1">
          <mxGeometry height="10" width="22" x="489" y="435" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-32" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="Auth Microservice" vertex="1">
          <mxGeometry height="21" width="89" x="471" y="508" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-34" parent="1" style="points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#3399FF;strokeColor=none;shape=mxgraph.alibaba_cloud.edas_enterprise_distributed_application_service;" value="" vertex="1">
          <mxGeometry height="28" width="27.47" x="500" y="480" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-35" edge="1" parent="1" style="endArrow=classic;startArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="480" y="493.86" as="sourcePoint" />
            <mxPoint x="360" y="493.86" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-43" parent="1" style="sketch=0;outlineConnect=0;fontColor=#000000;fillColor=#fa6800;strokeColor=#C73500;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.mq_broker;" value="" vertex="1">
          <mxGeometry height="24.77" width="28" x="322" y="481.62" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-44" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="RabbitMQ" vertex="1">
          <mxGeometry height="21" width="50" x="311" y="506.39" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-45" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="usersMicroservice: createOne" vertex="1">
          <mxGeometry height="10" width="77" x="383" y="480" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-47" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="id, role" vertex="1">
          <mxGeometry height="10" width="25" x="409" y="490" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-48" edge="1" parent="1" style="endArrow=classic;startArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="311" y="493.92" as="sourcePoint" />
            <mxPoint x="220" y="494" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-49" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="createOne" vertex="1">
          <mxGeometry height="10" width="30" x="250" y="480" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-50" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="id, role" vertex="1">
          <mxGeometry height="10" width="25" x="252.5" y="490" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-51" parent="1" style="strokeWidth=2;html=1;shape=mxgraph.flowchart.database;whiteSpace=wrap;strokeColor=#3399FF;" value="" vertex="1">
          <mxGeometry height="28" width="28" x="630" y="481" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-52" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="539" y="494.92" as="sourcePoint" />
            <mxPoint x="619" y="494.92" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-53" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="INSERT INTO auth_sessions" vertex="1">
          <mxGeometry height="10" width="70" x="539" y="481.62" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-54" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="Auth Database" vertex="1">
          <mxGeometry height="21" width="71" x="608.5" y="508" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-55" parent="1" style="points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=light-dark(#FFFF66,#FFFF00);strokeColor=none;shape=mxgraph.alibaba_cloud.edas_enterprise_distributed_application_service;" value="" vertex="1">
          <mxGeometry height="28" width="27.47" x="183" y="481" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-56" parent="1" style="strokeWidth=2;html=1;shape=mxgraph.flowchart.database;whiteSpace=wrap;strokeColor=light-dark(#FFFF66,#FFFF00);" value="" vertex="1">
          <mxGeometry height="28" width="28" x="30" y="481" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-58" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="INSERT INTO users_database" vertex="1">
          <mxGeometry height="10" width="70" x="90" y="480" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-59" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="Users Database" vertex="1">
          <mxGeometry height="21" width="80.5" x="9.500000000000007" y="509" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-60" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="170" y="494.97999999999996" as="sourcePoint" />
            <mxPoint x="70" y="495" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-61" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="Users Microservice" vertex="1">
          <mxGeometry height="21" width="93.52" x="149.98" y="506.39" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-62" parent="1" style="sketch=0;outlineConnect=0;fontColor=#000000;fillColor=#fa6800;strokeColor=#C73500;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.mq_broker;" value="" vertex="1">
          <mxGeometry height="24.77" width="28" x="30" y="610" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-64" parent="1" style="sketch=0;outlineConnect=0;fontColor=#000000;fillColor=#fa6800;strokeColor=#C73500;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.mq_broker;" value="" vertex="1">
          <mxGeometry height="24.77" width="28" x="501.5" y="610" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-66" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="RabbitMQ" vertex="1">
          <mxGeometry height="21" width="50" x="19" y="634.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-67" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="RabbitMQ" vertex="1">
          <mxGeometry height="21" width="50" x="490.5" y="634.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-70" parent="1" style="points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=light-dark(#FFFF66,#7F00FF);strokeColor=none;shape=mxgraph.alibaba_cloud.edas_enterprise_distributed_application_service;" value="" vertex="1">
          <mxGeometry height="28" width="27.47" x="272.53000000000003" y="606.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-71" parent="1" style="strokeWidth=2;html=1;shape=mxgraph.flowchart.database;whiteSpace=wrap;strokeColor=light-dark(#7F00FF,#7F00FF);" value="" vertex="1">
          <mxGeometry height="28" width="28" x="272" y="700" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-73" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1;rotation=0;" value="INSERT INTO events_database" vertex="1">
          <mxGeometry height="10" width="79.53" x="203.97" y="655.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-74" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="286.06" y="645.77" as="sourcePoint" />
            <mxPoint x="286.06" y="690" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-76" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="createOne" vertex="1">
          <mxGeometry height="10" width="30" x="153" y="606.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-78" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value=" ">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="75.5" y="621.94" as="sourcePoint" />
            <mxPoint x="260" y="623" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-79" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="140" y="540" as="sourcePoint" />
            <mxPoint x="44" y="600" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-82" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="513.9" y="530" as="sourcePoint" />
            <mxPoint x="514" y="595" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-83" edge="1" parent="1" style="endArrow=classic;html=1;rounded=0;" value="">
          <mxGeometry height="50" relative="1" width="50" as="geometry">
            <mxPoint x="490.5" y="622.24" as="sourcePoint" />
            <mxPoint x="310.5" y="622.24" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-84" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1" value="createOne" vertex="1">
          <mxGeometry height="10" width="30" x="383" y="606.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-85" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="Events Microservice" vertex="1">
          <mxGeometry height="21" width="93.74" x="239.13" y="585.77" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-86" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=8;fontStyle=1" value="Events Database" vertex="1">
          <mxGeometry height="21" width="80.73" x="249.27" y="740" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-87" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1;rotation=328;" value="eventsMicroservice: createOne" vertex="1">
          <mxGeometry height="10" width="80" x="50.00000000000001" y="550" as="geometry" />
        </mxCell>
        <mxCell id="pPOTRKMNoA6qDiX2zT7m-88" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;fillColor=none;strokeColor=none;strokeWidth=1;fontFamily=Verdana;labelBackgroundColor=none;fontSize=4;fontStyle=1;rotation=0;" value="eventsMicroservice: createOne" vertex="1">
          <mxGeometry height="10" width="80" x="434.001520167423" y="549.9970110501104" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
crm_system_design (2).drawio…]()


---

## Быстрый старт

### Требования
- Docker
- Node.js 20+

### Запуск проекта

```bash
git clone https://github.com/rabbit23113-spec/Event-Sourcing-CRM.git
cd event-sourcing-crm
npm run setup
docker-compose up --build
