node docfilecreator.js
cd three.js
npm install && npm run build && COPY ".\build\three.module.js" "..\three.module.js" /Y && git reset --hard && cd..
