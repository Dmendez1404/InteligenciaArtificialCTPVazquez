// Manual de Aprendizaje de IA 2026 - Saberes Avanzados V5
// Generated At: 2026-06-11

const MANUAL_DATA = [
  {
    "id": 0,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "1. Describir los elementos que integran el entorno web.",
    "il": "1.1 Identifica las herramientas que proporciona el entorno web para la comunicación, mensajería instantánea y visualización de imágenes.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Entorno web",
        "definition": "Arquitectura distribuida cliente-servidor basada en estándares W3C y protocolos TCP/IP. Actúa como capa de interfaz (Frontend) y procesamiento (Backend) que facilita la comunicación asíncrona mediante APIs, siendo infraestructura clave para el despliegue de modelos de Machine Learning y servicios de IA en la nube.",
        "example": "Despliegue de un modelo LLM utilizando FastAPI (Python) para exponer endpoints RESTful, permitiendo que una SPA en React consuma el modelo y transmita predicciones en tiempo real vía HTTPS."
      },
      {
        "term": "Herramientas de comunicación",
        "definition": "Protocolos y aplicaciones sobre la capa de aplicación (OSI) que facilitan el intercambio de paquetes de datos de forma sincrónica o asincrónica, empleando arquitecturas como WebSockets, gRPC o colas de mensajes (RabbitMQ, Kafka) para interconectar microservicios y agentes de IA.",
        "example": "Implementar un sistema pub/sub con Apache Kafka para que múltiples agentes de IA envíen alertas de seguridad en tiempo real a un dashboard centralizado."
      },
      {
        "term": "Mensajería instantánea",
        "definition": "Sistemas de comunicación de baja latencia basados en el protocolo WebSocket y WebRTC, los cuales establecen túneles TCP bidireccionales persistentes, permitiendo streaming de datos (texto, audio) sin el overhead continuo de los encabezados HTTP tradicionales.",
        "example": "Desarrollo de un chatbot de soporte basado en Retrieval-Augmented Generation (RAG) que interactúa con el usuario a través de un socket bidireccional, devolviendo tokens de texto a medida que el LLM los genera (streaming)."
      },
      {
        "term": "Visualización de imágenes",
        "definition": "Renderización en el navegador de matrices de píxeles mediante la decodificación de formatos estandarizados y el uso de APIs gráficas (WebGL, Canvas API), esenciales para representar los outputs de modelos de visión por computadora y redes neuronales convolucionales.",
        "example": "Utilizar la Canvas API de HTML5 combinada con TensorFlow.js para renderizar cajas delimitadoras (bounding boxes) sobre el video de una cámara web en tiempo real al detectar rostros."
      },
      {
        "term": "Navegadores y buscadores",
        "definition": "El navegador es el agente de usuario que interpreta el DOM y ejecuta motores de JavaScript (V8); el buscador es un motor de recuperación de información basado en rastreo (crawlers), indexación vectorial y algoritmos de ranking semántico.",
        "example": "Un motor de búsqueda interno empresarial que utiliza bases de datos vectoriales (como Pinecone) y modelos de embeddings para realizar búsquedas semánticas sobre miles de documentos corporativos desde un navegador."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Protocolos HTTP/HTTPS",
        "definition": "Protocolos de transferencia de hipertexto en la capa de aplicación. HTTPS añade seguridad mediante la capa TLS (Transport Layer Security) implementando criptografía asimétrica para el intercambio de claves y simétrica para el cifrado del payload, protegiendo los datos en tránsito.",
        "example": "Consumir la API de OpenAI desde un backend Node.js asegurando que el token de autenticación viaja encriptado por TLS, previniendo ataques Man-in-the-Middle."
      },
      {
        "term": "Funcionamiento básico de servidores DNS",
        "definition": "Sistema de Nombres de Dominio, protocolo jerárquico que resuelve nombres (FQDNs) en direcciones IP, crucial para el enrutamiento de tráfico hacia balanceadores de carga y clústeres de servidores de inferencia de IA.",
        "example": "Configurar registros CNAME y A en Amazon Route 53 para redirigir el tráfico a un balanceador de carga que distribuye las peticiones entre varias GPUs de inferencia."
      },
      {
        "term": "Cookies",
        "definition": "Fragmentos de información persistente almacenados en el lado del cliente (Navegador) mediante encabezados HTTP (Set-Cookie). Son fundamentales para el manejo de sesiones con estado (Stateful), empleando atributos de seguridad como HttpOnly y Secure.",
        "example": "Almacenar un identificador de sesión (Session ID) cifrado como una cookie HttpOnly para autenticar a un Data Scientist en un panel de control de JupyterHub sin exponer el token a ataques XSS."
      },
      {
        "term": "Almacenamiento local en el navegador y conceptos de URL estructurada",
        "definition": "APIs Web Storage (localStorage, sessionStorage) e IndexedDB para persistencia de datos en el cliente. La URL estructurada define esquemas, dominios, puertos, paths y query strings críticos para el ruteo de peticiones a APIs REST.",
        "example": "Almacenar en localStorage un token JWT tras el login y enviarlo como parámetro de autenticación en las llamadas fetch hacia un endpoint con estructura /api/v1/models/predict."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Chat en línea",
        "definition": "Canal de comunicación digital de latencia sub-milisegundo basado en WebSockets o Server-Sent Events (SSE). En el ecosistema de IA, sirve de interfaz de lenguaje natural para sistemas multi-agente o Large Language Models.",
        "example": "Desplegar una interfaz en Next.js usando Socket.io para mantener una sesión de chat abierta bidireccional con un modelo LangChain que actúa como tutor virtual."
      },
      {
        "term": "Videollamadas",
        "definition": "Transmisión sincrónica de flujos multimedia (audio/video) gestionada por protocolos P2P como WebRTC sobre UDP, optimizando la baja latencia y tolerando pérdida de paquetes, apoyándose en servidores STUN/TURN para atravesar NATs y firewalls.",
        "example": "Capturar el flujo de video WebRTC de un usuario y procesarlo frame a frame en un servidor con OpenCV para realizar reconocimiento de expresiones faciales en tiempo real."
      },
      {
        "term": "Plataformas de compartición de multimedia (imágenes/fotografías)",
        "definition": "Infraestructuras de almacenamiento distribuido en la nube (ej. AWS S3) con CDN asociadas, diseñadas para ingerir, almacenar y distribuir masivamente Data Lakes multimedia no estructurados para entrenamiento de IA.",
        "example": "Crear un pipeline MLOps donde imágenes subidas por usuarios a un bucket S3 activan funciones AWS Lambda que ejecutan un modelo de segmentación de imágenes de PyTorch automáticamente."
      },
      {
        "term": "Sincronía y asincronía en flujos colaborativos",
        "definition": "Arquitecturas de comunicación donde la sincronía (bloqueante) espera una respuesta inmediata, y la asincronía (no bloqueante) delega tareas intensivas a colas de trabajo (workers) mediante promesas o arquitecturas Event-Driven.",
        "example": "Usar asincronía (Celery + Redis) para que un servidor acepte una petición de entrenamiento de un modelo de IA (que toma 3 horas), devuelva un Job ID inmediato y notifique al cliente al finalizar, sin bloquear el servidor."
      }
    ],
    "quiz": {
      "question": "En el diseño de arquitecturas para Inteligencia Artificial en el entorno web moderno, ¿cuál es la ventaja de emplear mensajería asíncrona basada en WebSockets sobre el protocolo HTTP tradicional para un chatbot LLM?",
      "options": [
        "HTTP tradicional establece túneles bidireccionales continuos, mientras que los WebSockets cierran la conexión tras cada token.",
        "Los WebSockets no admiten encriptación TLS, lo que acelera el procesamiento de la IA en milisegundos sin importar la seguridad.",
        "Los WebSockets establecen una conexión persistente bidireccional (TCP), permitiendo el streaming fluido de tokens generados por el LLM sin el overhead de reabrir conexiones por cada petición.",
        "El entorno web moderno solo soporta HTTP/1.0, por lo que los WebSockets son el único protocolo de red disponible a nivel de hardware."
      ],
      "answer": 2,
      "explanation": "Correcto. A diferencia de HTTP tradicional (donde cada petición abre y cierra una conexión), los WebSockets (ws/wss) mantienen un túnel TCP persistente bidireccional. Esto es fundamental para aplicaciones de IA conversacional (chatbots), ya que permite transmitir las respuestas del modelo (tokens) en tiempo real mediante streaming, reduciendo el overhead de latencia de red."
    }
  },
  {
    "id": 1,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "2. Aplicar las herramientas colaborativas para la elaboración de documentos en la nube.",
    "il": "2.1 Interpreta la usabilidad de las herramientas de trabajo colaborativo para el procesamiento de la información, elaboration de multimediales, creación de formularios y hojas de cálculo en la nube.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Herramientas colaborativas",
        "definition": "Plataformas de software basadas en la nube que emplean sincronización de estado concurrente (ej. Operational Transformation o CRDTs) para permitir que múltiples usuarios interactúen, modifiquen y lean un mismo recurso de datos (documento, código o arquitectura) en tiempo real, resolviendo conflictos algorítmicamente.",
        "example": "Uso de Google Colab o JupyterHub, donde múltiples científicos de datos pueden co-escribir y ejecutar código Python en cuadernos compartidos simultáneamente, iterando sobre hiperparámetros de un modelo de Deep Learning."
      },
      {
        "term": "Almacenamiento en la nube",
        "definition": "Arquitectura de almacenamiento de datos descentralizado (Object, Block o File storage) alojado en centros de datos remotos, que provee alta disponibilidad, escalabilidad elástica y redundancia (RAID distribuido) gestionada por plataformas IaaS (AWS S3, Azure Blob, GCS).",
        "example": "Configurar un bucket de Amazon S3 como 'Data Lake' para alojar un corpus masivo de 500GB de texto crudo, permitiendo que clústeres de computación paralela extraigan y preprocesen los datos para entrenar un modelo generativo."
      },
      {
        "term": "Procesamiento de información en línea",
        "definition": "Capacidad de ejecutar cargas de trabajo computacionales intensivas (procesamiento por lotes o streaming en tiempo real) en infraestructuras de computación en la nube (ej. instancias EC2, contenedores Kubernetes o funciones Serverless), disociando la capa de cómputo del hardware local.",
        "example": "Ejecutar un pipeline de ETL (Extracción, Transformación y Carga) usando Apache Spark en la nube para limpiar y transformar datos de sensores IoT antes de alimentarlos a un modelo de detección de anomalías."
      },
      {
        "term": "Formularios y hojas de cálculo en la nube",
        "definition": "Interfaces web dinámicas de captura de datos vinculadas a bases de datos en la nube. Las hojas de cálculo operan como motores de datos reactivos con exposición mediante APIs RESTful, permitiendo integraciones programáticas para la extracción automatizada de datasets.",
        "example": "Diseñar un script en Python usando la API de Google Sheets para descargar un conjunto de datos etiquetados colaborativamente por expertos humanos, convertirlo en formato JSONL y usarlo para el fine-tuning de un modelo clasificador."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Control de versiones en documentos",
        "definition": "Sistemas de Control de Versiones (VCS) modernos, como Git, que utilizan grafos acíclicos dirigidos (DAGs) para rastrear y gestionar cambios históricos en bases de código y archivos, facilitando ramificaciones (branches), fusiones (merges) y CI/CD.",
        "example": "Crear un repositorio en GitHub para almacenar el código de una IA. Utilizar commits granulares para documentar cada cambio en la arquitectura de la red neuronal y permitir reversiones rápidas si el modelo sufre de degradación."
      },
      {
        "term": "Gestión de permisos avanzados de uso compartido e integración de APIs de servicios en la nube",
        "definition": "Administración de identidades y accesos (IAM) basada en el principio de menor privilegio (PoLP), integrando claves de API (API Keys) y tokens OAuth2/JWT para delegar y asegurar las interacciones programáticas entre microservicios de IA.",
        "example": "Configurar un rol IAM en AWS con permisos estrictos de solo lectura para un servicio de analítica de datos, impidiendo que una IA autónoma pueda borrar accidentalmente la base de datos maestra."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Procesamiento de información en la nube",
        "definition": "Paradigma de Cloud Computing que proporciona poder de cómputo elástico bajo demanda, utilizando virtualización de hardware o contenedores para ejecutar tareas analíticas complejas o entrenamiento de modelos que superarían la capacidad del hardware local.",
        "example": "Alquilar instancias aceleradas por hardware (ej. NVIDIA A100 GPUs) en la nube durante 4 horas exactas para entrenar una red neuronal Transformer de varios billones de parámetros, optimizando el costo computacional."
      },
      {
        "term": "Flujos colaborativos de datos distribuidos",
        "definition": "Arquitecturas MLOps donde los pipelines de datos se dividen y procesan paralelamente en nodos de un clúster distribuido, coordinados mediante herramientas de orquestación (Apache Airflow, Kubeflow) asegurando la tolerancia a fallos.",
        "example": "Diseñar un pipeline en Kubeflow donde un nodo descarga datos masivos, otro los normaliza en paralelo, y un tercero realiza la validación del modelo predictivo de forma colaborativa y asíncrona."
      },
      {
        "term": "Almacenamiento multiusuario remoto",
        "definition": "Sistemas de bases de datos o Object Storage en la nube optimizados para el control de concurrencia y transacciones (ACID o modelos eventuales), permitiendo escrituras/lecturas concurrentes de múltiples usuarios o agentes de IA sin corrupción de datos.",
        "example": "Integrar una base de datos vectorial remota (ej. Pinecone) accesible por múltiples instancias de una aplicación, permitiendo que varios agentes de IA consulten e inserten nuevos vectores semánticos simultáneamente."
      }
    ],
    "quiz": {
      "question": "Al desarrollar un ecosistema colaborativo para el entrenamiento de un modelo de Inteligencia Artificial utilizando infraestructura en la nube, ¿cuál es el propósito de implementar Sistemas de Control de Versiones (como Git) y gestión de permisos avanzados (IAM)?",
      "options": [
        "Permiten acelerar la renderización gráfica del hardware local conectándolo directamente a la RAM de la nube sin requerir contraseñas.",
        "Aseguran la trazabilidad de los cambios en el código (commits/branches) y aplican el principio de menor privilegio (PoLP) para proteger los datos contra modificaciones no autorizadas por servicios externos.",
        "El control de versiones encripta las comunicaciones HTTP transformándolas en HTTPS y los permisos IAM sirven para comprimir bases de datos vectoriales pesadas.",
        "Estas herramientas solo son aplicables al diseño de la Interfaz de Usuario (GUI) y no tienen ninguna relevancia en el ciclo de vida del aprendizaje automático (MLOps)."
      ],
      "answer": 1,
      "explanation": "Correcto. El control de versiones (Git) es esencial para registrar el historial de cambios del código, experimentar en ramas y poder retroceder si un modelo se rompe. Por su parte, IAM asegura la infraestructura, garantizando que solo los usuarios o microservicios autenticados y autorizados con privilegios mínimos puedan acceder a los datos de entrenamiento."
    }
  },
  {
    "id": 2,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "3. Discriminar la importancia de la protección de la información que se maneja en el ciber mundo y los tipos de ataques que pueden presentarse.",
    "il": "3.1 Contrasta las características y el propósito de las guerras cibernéticas, los ataques y su funcionamiento.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Ciberseguridad",
        "definition": "Arquitectura y marco de trabajo enfocado en defender redes, servidores y aplicaciones de ataques malintencionados. Abarca el despliegue de políticas Zero Trust (confianza cero), protección criptográfica e inteligencia de amenazas para asegurar la tríada CIA (Confidencialidad, Integridad y Disponibilidad).",
        "example": "Implementar un modelo 'Zero Trust Network Access' (ZTNA) en un centro de datos de IA, requiriendo validación biométrica multifactorial y revisión de estado en tiempo real para cualquier ingeniero de MLOps."
      },
      {
        "term": "Guerras cibernéticas",
        "definition": "Campañas ofensivas cibernéticas a escala estatal dirigidas contra infraestructuras críticas, sistemas financieros o redes militares de otro país. Involucran el despliegue de armamento digital (APT - Advanced Persistent Threats) con propósitos de sabotaje táctico o desestabilización nacional.",
        "example": "El ataque de malware Stuxnet, desarrollado por actores estatales para infiltrar y alterar físicamente la velocidad de rotación de centrifugadoras de enriquecimiento nuclear, eludiendo sistemas aislados (air-gapped)."
      },
      {
        "term": "Tipos de ataques informáticos",
        "definition": "Diversas taxonomías de vectores de amenaza que explotan vulnerabilidades técnicas o el factor humano. Incluyen inyecciones (SQLi), ataques volumétricos (DDoS), ataques MitM y, en IA, manipulación de datos de entrenamiento (Data Poisoning).",
        "example": "Un ataque de 'Data Poisoning' donde un actor introduce deliberadamente imágenes falsas etiquetadas en un Data Lake público, provocando que un modelo de visión por computadora falle al reconocer ciertas señales."
      },
      {
        "term": "Vulnerabilidades de los sistemas de información",
        "definition": "Brechas de seguridad intrínsecas o fallos lógicos en la arquitectura, código o configuración de un sistema (CWE/CVEs). Permiten que un atacante salte controles de acceso, ejecute código arbitrario, o eleve sus privilegios.",
        "example": "Explotar una vulnerabilidad en una librería antigua de procesamiento JSON para inyectar código malicioso directamente en un servidor (Remote Code Execution - RCE), logrando comprometer el backend de la IA."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Ingeniería social (Phishing, Vishing)",
        "definition": "Técnicas de manipulación psicológica enfocadas en explotar el factor humano. El atacante suplanta una identidad legítima mediante correos (Phishing) o voz (Vishing) para inducir a la víctima a entregar credenciales o ejecutar malware.",
        "example": "Un ataque de Spear Phishing donde se usa un modelo generativo (LLM) para redactar correos altamente personalizados y sin errores ortográficos dirigidos a un CEO, engañándolo para que ingrese su contraseña en un sitio falso."
      },
      {
        "term": "Denegación de servicio distribuido (DDoS)",
        "definition": "Ataque coordinado desde múltiples vectores o botnets diseñado para agotar los recursos de cómputo o el ancho de banda de un servidor, inundándolo de tráfico espurio (ej. SYN floods o ataques HTTP capa 7) dejándolo inaccesible.",
        "example": "Un grupo cibercriminal lanza un ataque DDoS apuntando a la API de inferencia de un modelo de imágenes, saturando el ancho de banda, lo que fuerza la caída de los balanceadores de carga e inactiva el servicio a nivel global."
      },
      {
        "term": "Conceptos de Zero-Day y vectores de ataque específicos en sistemas de IA",
        "definition": "Vulnerabilidades críticas de Día Cero sin parche disponible. En el campo de la IA, vectores específicos incluyen la inversión del modelo para extraer datos privados de entrenamiento, robo del modelo, o evasión mediante ejemplos adversarios.",
        "example": "Un atacante diseña ruido algorítmico imperceptible (Ejemplo Adversarial) sumado a una imagen de un gato. Aunque el humano ve un gato, este parche matemático engaña al modelo de visión artificial haciéndolo clasificarlo como un semáforo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Infraestructura crítica estatal",
        "definition": "Redes complejas de tecnología operativa (OT) e IT que sustentan servicios vitales (Smart Grids, telecomunicaciones, control aéreo). Su interconexión a internet y su dependencia digital las hace un objetivo militar primario en la guerra cibernética.",
        "example": "Un ciberataque APT dirigido a la red de distribución de energía utilizando malware destructivo para sobreescribir controladores lógicos programables (PLC), causando apagones masivos en hospitales y ciudades."
      },
      {
        "term": "Carácter político-estratégico de la guerra cibernética frente a fines delictivos de ataques comunes",
        "definition": "Distinción basada en la motivación del actor de la amenaza: El cibercrimen busca un beneficio económico directo (lucro o extorsión ransomware), mientras que la guerra cibernética busca destruir capacidades estratégicas o robar secretos de estado.",
        "example": "Diferenciar un ataque Ransomware a un colegio pidiendo Bitcoin (Cibercrimen) frente a la intrusión sigilosa de una agencia de inteligencia extranjera para robar investigaciones universitarias secretas sobre IA de defensa (Guerra cibernética)."
      },
      {
        "term": "Espionaje corporativo",
        "definition": "Operaciones encubiertas financiadas por corporaciones rivales o naciones-estado para exfiltrar secretos comerciales, algoritmos propietarios, arquitecturas de IA o bases de datos de clientes, frecuentemente usando amenazas persistentes avanzadas (APT) o infiltrados internos.",
        "example": "Una compañía tecnológica rival soborna a un empleado o usa malware sofisticado para exfiltrar los pesos paramétricos (weights) del último modelo de lenguaje fundacional de la competencia, robando millones de dólares en I+D."
      }
    ],
    "quiz": {
      "question": "Dentro del contexto de la ciberseguridad en arquitecturas de Inteligencia Artificial, ¿qué define correctamente la diferencia operativa entre un ataque de 'Envenenamiento de datos' (Data Poisoning) y un 'Ataque Adversarial' (Adversarial Attack)?",
      "options": [
        "El Envenenamiento de datos cifra la base de datos protegiéndola, y el Ataque Adversarial es un tipo de software antivirus pasivo.",
        "El Envenenamiento de datos ocurre durante el despliegue físico de los servidores en el rack, y el Ataque Adversarial es el robo físico del disco duro de la nube.",
        "El Envenenamiento de datos altera maliciosamente el corpus de datos durante la fase de ENTRENAMIENTO del modelo; mientras que el Ataque Adversarial manipula entradas específicas durante la fase de INFERENCIA para engañar al modelo ya entrenado.",
        "Ambos términos significan exactamente lo mismo y se refieren a enviar millones de correos de SPAM con Phishing a los desarrolladores del sistema de IA."
      ],
      "answer": 2,
      "explanation": "Correcto. El 'Data Poisoning' busca introducir datos corruptos (etiquetas falsas) desde el proceso formativo inicial del modelo, arruinando su conocimiento base. En contraste, un Ataque Adversarial no altera el modelo en sí, sino que aplica ruido o modificaciones matemáticamente diseñadas a los datos de entrada en producción (fase de inferencia) para forzar predicciones o clasificaciones erróneas."
    }
  },
  {
    "id": 3,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "4. Distinguir las características del ámbito de la ciberseguridad, sus principios y las medidas de seguridad cibernética.",
    "il": "4.1 Diferencia los tipos de malware y código malicioso.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Malware",
        "definition": "Código ejecutable hostil o intrusivo diseñado para comprometer la confidencialidad, integridad o disponibilidad de sistemas, redes y flujos de datos. En entornos de IA, el malware puede inyectarse en dependencias de software o en paquetes de modelos preentrenados comprometiendo la cadena de suministro (Supply Chain Attacks).",
        "example": "Descargar un modelo preentrenado de HuggingFace que ha sido modificado maliciosamente mediante serialización insegura (pickle) para ejecutar código remoto (RCE) al ser cargado en el servidor."
      },
      {
        "term": "Virus",
        "definition": "Fragmento de código malicioso parasitario que requiere alojarse dentro de un archivo ejecutable legítimo y necesita intervención humana (ejecución) para activarse y replicar su carga útil (payload) a otros binarios del sistema.",
        "example": "Un virus de macro incrustado en un archivo CSV o Excel que, al ser abierto por un analista de datos para limpiar un dataset, infecta el compilador local y corrompe los scripts de Python."
      },
      {
        "term": "Troyanos",
        "definition": "Software malicioso que utiliza ingeniería social para presentarse como una aplicación benigna o útil, pero que de forma encubierta establece puertas traseras (Backdoors) o herramientas de acceso remoto (RAT) para el atacante.",
        "example": "Una supuesta herramienta gratuita de 'Optimización de GPUs para Deep Learning' que, al instalarse, abre un túnel inverso SSH hacia un servidor atacante, permitiéndole exfiltrar conjuntos de datos privados."
      },
      {
        "term": "Ransomware",
        "definition": "Malware extorsivo que emplea criptografía asimétrica fuerte para cifrar los volúmenes de almacenamiento de la víctima y paralizar la operación, exigiendo un rescate económico (usualmente en criptomonedas) por la clave privada de descifrado.",
        "example": "Un ataque a la infraestructura MLOps de un hospital que cifra el clúster de bases de datos que aloja el modelo de predicción oncológica, deteniendo por completo las capacidades de diagnóstico automatizado."
      },
      {
        "term": "Spyware",
        "definition": "Software espía diseñado para monitorear, capturar y exfiltrar telemetría del usuario, pulsaciones de teclas (Keyloggers), credenciales o tráfico de red de forma subrepticia hacia servidores de comando y control (C2).",
        "example": "Un Spyware oculto en una extensión de navegador de un desarrollador que captura los tokens de sesión de AWS pegados en la consola, permitiendo a atacantes acceder a los buckets de datos de IA."
      },
      {
        "term": "Gusanos informáticos",
        "definition": "Código malicioso autónomo que explota vulnerabilidades de red (zero-days o falta de parches) para propagarse lateralmente de máquina en máquina sin requerir interacción del usuario ni archivos anfitriones.",
        "example": "Un gusano que escanea puertos 2375 abiertos de la API de Docker sin autenticación e infecta automáticamente cada contenedor de entrenamiento de IA en la red corporativa para instalar mineros de criptomonedas (Cryptojacking)."
      },
      {
        "term": "Código malicioso",
        "definition": "Cualquier script, payload o comando (ej. en Bash, PowerShell, Python) estructurado lógicamente para aprovechar una vulnerabilidad (Exploit) y comprometer la seguridad o la lógica de negocio de un aplicativo.",
        "example": "Un script de bash ofuscado que se ejecuta automáticamente durante el pipeline CI/CD (GitHub Actions) y modifica sutilmente los pesos de una red neuronal para que el modelo favorezca a un competidor comercial."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Sistemas de detección de intrusos (IDS/IPS)",
        "definition": "Dispositivos o software de red que analizan el tráfico en tiempo real mediante análisis heurístico y de anomalías. El IDS solo alerta (pasivo), mientras que el IPS interviene y bloquea dinámicamente los paquetes sospechosos en el firewall (activo).",
        "example": "Un IPS impulsado por Machine Learning que detecta un patrón anómalo de transferencia masiva de datos (exfiltración de un dataset corporativo) desde un servidor a las 3:00 a.m. y bloquea la IP destino automáticamente."
      },
      {
        "term": "Análisis de firmas de virus",
        "definition": "Método determinista de seguridad que compara los hashes criptográficos o secuencias de bytes de un archivo contra una base de datos de amenazas conocidas (firmas) para identificar malware heredado.",
        "example": "Un motor antivirus escanea un contenedor Docker descargado para entrenar un modelo y detecta una coincidencia exacta de firma (hash MD5) con un minero de Monero previamente catalogado."
      },
      {
        "term": "Técnicas de evasión de malware (polimorfismo) y entornos de Sandbox",
        "definition": "El polimorfismo altera el código fuente del malware en cada infección para evadir antivirus basados en firmas. Los Sandbox son entornos virtuales aislados usados por investigadores de seguridad para detonar archivos sospechosos y analizar su comportamiento dinámico (heurística).",
        "example": "Detonar un paquete dudoso de Python en un Sandbox aislado de la red principal; al ejecutarse, el entorno detecta que el paquete intentaba descargar bibliotecas maliciosas polimórficas y aborta el despliegue del modelo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Virus (anclaje a ejecutables y replicación manual)",
        "definition": "Agente malicioso no autónomo que se inyecta en el código binario de aplicaciones legítimas, dependiendo de que el usuario ejecute el archivo infectado para poder copiarse a otros ejecutables del entorno local.",
        "example": "Un investigador recibe un ejecutable 'Simulador_IA.exe' en un USB. Al abrirlo, ejecuta el simulador pero secretamente infecta los compiladores de C++ del sistema operativo."
      },
      {
        "term": "Troyano (camuflaje y accesos traseros/backdoors)",
        "definition": "Vector de ataque basado en la ofuscación de intenciones. Al ser instalado por la propia víctima engañada, abre puertos o Reverse Shells, brindando al atacante control interactivo silencioso sobre el equipo comprometido.",
        "example": "Descargar un crack para una suite de diseño privativa que, al fondo, instala un troyano RAT que permite a un ciberdelincuente encender la webcam y robar credenciales de bases de datos."
      },
      {
        "term": "Gusano (autopropagación de red sin interacción)",
        "definition": "Software malicioso de propagación rápida que aprovecha protocolos de red inseguros (ej. SMB) o servicios sin parchear para moverse lateralmente de forma automática infectando cientos de servidores en minutos.",
        "example": "El ransomware WannaCry, que utilizó la capacidad de gusano (exploit EternalBlue) para saltar automáticamente de un servidor vulnerable a otro dentro de la red corporativa sin que nadie abriera correos."
      },
      {
        "term": "Ransomware (secuestro de activos mediante cifrado y extorsión por criptomonedas)",
        "definition": "Ataque catastrófico a la disponibilidad y confidencialidad. Utiliza algoritmos de cifrado militar (ej. AES-256) sobre los discos duros y exige un pago irrastreable para liberar la clave de desencriptación.",
        "example": "Un grupo criminal encripta los repositorios centrales de código y modelos matemáticos de una empresa tecnológica de IA, amenazando con publicar el código fuente en la Deep Web si no se paga 1 millón de dólares."
      }
    ],
    "quiz": {
      "question": "¿Cuál es la principal diferencia técnica y de propagación entre un Virus informático tradicional y un Gusano de red (Worm) en un ecosistema de servidores conectados?",
      "options": [
        "El Virus se ejecuta únicamente en la nube de AWS, mientras que el Gusano solo puede existir en memorias USB físicas.",
        "Ambos son lo mismo y requieren que el usuario abra obligatoriamente un correo electrónico de SPAM para poder funcionar.",
        "El Virus requiere anclarse a un archivo legítimo y ser ejecutado manualmente por un usuario para propagarse; el Gusano es autónomo y se propaga explotando vulnerabilidades de red sin intervención humana.",
        "El Virus encripta los datos para pedir rescate financiero, mientras que el Gusano optimiza los modelos de Machine Learning."
      ],
      "answer": 2,
      "explanation": "Correcto. La distinción clave recae en la autonomía. Los virus son parásitos que necesitan de un archivo anfitrión (host) y de la acción de un usuario (hacer clic, abrir documento) para propagarse. Los gusanos, por el contrario, son programas independientes que escanean la red buscando puertos abiertos o vulnerabilidades para auto-copiarse y moverse lateralmente de forma automática."
    }
  },
  {
    "id": 4,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "5. Ilustrar los procedimientos para la protección e integridad de los datos mediante el uso de tecnologías.",
    "il": "5.1 Explica las técnicas de encriptación y los tipos de controles de integridad de datos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Técnicas de encriptación",
        "definition": "Procesos criptográficos fundamentales para asegurar la confidencialidad de los datos (Data at Rest y Data in Transit) aplicando algoritmos matemáticos complejos que ofuscan la información original en texto cifrado o 'Ciphertext', solo reversible con la llave correcta.",
        "example": "Almacenar la base de datos de entrenamiento con información médica (PHI) aplicando cifrado AES-256 en el disco duro para cumplir con normativas de privacidad (HIPAA) y evitar fugas si ocurre un robo físico del servidor."
      },
      {
        "term": "Criptografía simétrica y asimétrica",
        "definition": "En la Simétrica, la misma clave secreta cifra y descifra, siendo computacionalmente muy rápida. En la Asimétrica, existe un par de llaves vinculadas algebraicamente (Pública/Privada) usada para intercambio seguro de llaves de sesión y firmas digitales, aunque demanda más CPU.",
        "example": "Al establecer una conexión HTTPS, el navegador y el servidor usan criptografía asimétrica (RSA) de forma inicial para compartir una clave secreta y luego pasan a criptografía simétrica (AES) para encriptar la comunicación de forma rápida."
      },
      {
        "term": "Controles de integridad",
        "definition": "Mecanismos y protocolos de verificación que validan matemáticamente que la información no ha sido alterada, manipulada ni corrompida de forma accidental o maliciosa durante el almacenamiento, transmisión o inferencia en la red.",
        "example": "Utilizar sumas de comprobación (Checksums) en una transferencia de un dataset de 50GB. Si al descargarlo la suma calculada difiere de la original, el ingeniero sabe que el archivo de datos está corrupto y debe redescargarse."
      },
      {
        "term": "Funciones hash",
        "definition": "Algoritmos deterministas unidireccionales (ej. SHA-256, Argon2) que toman una entrada de tamaño variable y devuelven una salida de longitud fija (digest). Mínimos cambios en la entrada generan un hash completamente distinto (Efecto Avalancha).",
        "example": "Almacenar contraseñas de usuarios en una base de datos usando el algoritmo de hash Argon2 con un valor semilla ('Salt'). De esta manera, aunque se vulnere la base de datos, el atacante no podrá revertir los hashes para leer las contraseñas reales."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Certificados digitales (SSL/TLS)",
        "definition": "Documentos electrónicos emitidos por Autoridades de Certificación (CA) que vinculan la identidad de una entidad a una clave pública, permitiendo a los clientes verificar criptográficamente la autenticidad del servidor y establecer túneles seguros TLS.",
        "example": "Un navegador verifica el certificado TLS de un dominio. Si es válido, muestra el candado verde y el usuario confía en que los datos financieros enviados al modelo de detección de fraude están protegidos contra escuchas."
      },
      {
        "term": "Infraestructura de clave pública (PKI)",
        "definition": "Marco integral de políticas, procesos de validación, software y Autoridades de Certificación (CAs) diseñado para crear, administrar, distribuir, utilizar, almacenar y revocar certificados digitales en arquitecturas de red complejas.",
        "example": "Una empresa despliega su propio PKI corporativo para emitir certificados digitales únicos a cada microservicio de Inteligencia Artificial en su clúster Kubernetes, garantizando encriptación mTLS entre todos los contenedores."
      },
      {
        "term": "Algoritmos AES/RSA y conceptos de colisión en funciones Hash",
        "definition": "AES es el estándar de cifrado simétrico robusto por bloques. RSA es el pionero del cifrado asimétrico. Una colisión Hash ocurre cuando un algoritmo débil (ej. MD5) genera el mismo digest para dos inputs diferentes, comprometiendo la integridad.",
        "example": "Un atacante aprovecha una vulnerabilidad de colisión en el algoritmo SHA-1 para crear un archivo ejecutable malicioso que genera exactamente el mismo hash que una actualización legítima de Python, engañando la verificación de integridad."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Cifrado Asimétrico",
        "definition": "Paradigma criptográfico de clave pública que resuelve el problema de la distribución segura de claves. Una llave se publica al mundo para que cualquiera cifre información dirigida al propietario, y solo la llave privada retenida puede descifrarla.",
        "example": "Un ingeniero de datos usa tu clave pública para cifrar un texto con una API Key confidencial. Aunque un espía intercepte el correo, solo tú, usando tu clave privada protegida en tu PC, podrás leer la API Key."
      },
      {
        "term": "Par de llaves criptográficas (pública para cifrar, privada para descifrar)",
        "definition": "Asimetría matemática donde derivar la llave privada desde la pública es computacionalmente inviable (Hard Problem). Se aplica masivamente en protocolos SSH para autenticación de servidores remotos sin contraseñas estáticas.",
        "example": "Generar un par de llaves SSH para conectarte a la consola de un servidor de Machine Learning en Amazon EC2; la llave pública se registra en el servidor y tu llave privada queda protegida localmente."
      },
      {
        "term": "Firmas digitales de integridad",
        "definition": "Esquema criptográfico de No Repudio y Autenticidad. Se aplica una función hash al documento y se cifra el hash con la Llave Privada del remitente. Cualquiera puede usar la Pública para verificar que el remitente real lo firmó y no hubo alteraciones.",
        "example": "HuggingFace utiliza firmas digitales en repositorios de modelos de lenguaje abierto. Al descargar un modelo fundacional (SafeTensors), el cliente valida la firma digital garantizando que el modelo es genuino y no fue adulterado (envenenado)."
      }
    ],
    "quiz": {
      "question": "En el contexto del cifrado asimétrico (como RSA o curvas elípticas), si un sistema de Inteligencia Artificial necesita enviar resultados altamente confidenciales a un usuario específico a través de internet, ¿cómo debe cifrarse el mensaje?",
      "options": [
        "El sistema de IA debe cifrar el mensaje usando su propia llave privada, para que el usuario lo descifre usando la llave pública de la IA.",
        "El sistema de IA debe cifrar el mensaje usando la llave PÚBLICA del usuario. Así, únicamente el usuario, empleando su correspondiente llave PRIVADA, será capaz de descifrarlo.",
        "El sistema de IA debe aplicar una función Hash SHA-256 al mensaje y enviarlo en texto plano, confiando en que el Hash protegerá la confidencialidad.",
        "El sistema de IA debe generar un certificado TLS falso y enviarlo comprimido en un archivo .zip."
      ],
      "answer": 1,
      "explanation": "Correcto. El fundamento de la criptografía asimétrica para asegurar la confidencialidad establece que el remitente (el sistema de IA) debe usar la llave Pública del receptor para cifrar los datos. Debido al diseño matemático del algoritmo, esos datos cifrados únicamente pueden ser revertidos (descifrados) por quien posee la llave Privada correspondiente (el usuario final)."
    }
  },
  {
    "id": 5,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "6. Examinar la importancia del trabajo con sistemas operativos de código abierto y licenciados, sus procesos y compatibilidad.",
    "il": "6.1 Reconoce el concept e importancia de los sistemas operativos y sus procesos en el uso de los dispositivos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Sistemas operativos",
        "definition": "Plataforma de software fundamental (Kernel + Espacio de Usuario) que actúa como intermediario entre el hardware (CPU, RAM, Discos) y las aplicaciones. Abstrae la complejidad física brindando APIs de llamadas al sistema (Syscalls) para gestionar procesos, memoria y dispositivos I/O.",
        "example": "Linux (ej. Ubuntu Server), macOS y Windows Server. En la industria de la Inteligencia Artificial, Linux es el estándar dominante debido a su eficiencia, estabilidad, compatibilidad nativa con contenedores Docker y ecosistemas de controladores de hardware (como NVIDIA CUDA)."
      },
      {
        "term": "Código abierto vs licenciado",
        "definition": "El software Open Source provee transparencia del código fuente (licencias GPL, MIT, Apache), permitiendo a la comunidad global auditarlo y modificarlo libremente. El software licenciado (Propietario) oculta el código y restringe su modificación, monetizando el derecho de uso.",
        "example": "Desplegar un clúster de bases de datos utilizando PostgreSQL y Linux (ambos código abierto, con alta seguridad y cero costos de licencia) frente a usar Oracle DB sobre Windows Server (propietario y con altísimos costos recurrentes de licenciamiento corporativo)."
      },
      {
        "term": "Gestión de procesos",
        "definition": "Componente crítico del Kernel que instancia los programas ejecutables en memoria, creando Bloques de Control de Proceso (PCB) para administrar su estado, asignarles tiempo fraccionado de procesador (Time Slicing) y manejar cambios de contexto (Context Switch).",
        "example": "El planificador (Scheduler) de Linux paralizando temporalmente el hilo de la Interfaz Gráfica para darle máxima prioridad de CPU y procesamiento matricial a un script crítico de entrenamiento de red neuronal."
      },
      {
        "term": "Memoria",
        "definition": "El Kernel administra el espacio físico de RAM usando segmentación y paginación, brindando a cada proceso un espacio de memoria virtual abstracto y aislado. Esto previene que los procesos se corrompan entre sí e implementa Swap (Intercambio) cuando la RAM se satura.",
        "example": "Al procesar un dataset de pandas (Python) de 30GB en una máquina con 16GB de RAM, el sistema operativo recurre a la paginación de memoria virtual (Swap en SSD) para evitar que el proceso falle por falta de memoria (OOM Kill)."
      },
      {
        "term": "Sistemas de archivos",
        "definition": "Capa lógica de almacenamiento que organiza cadenas de bytes en el disco físico presentándolas como directorios y archivos. Definen cómo se indexan, protegen (permisos POSIX) y recuperan los datos, asegurando tolerancia a fallos mediante Journaling.",
        "example": "El sistema de archivos ext4 o ZFS en servidores Linux, que garantiza operaciones atómicas y bitácora de cambios (journal) para proteger terabytes de datos de entrenamiento si el servidor sufre un corte de energía."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Planificación del CPU",
        "definition": "Algoritmos de bajo nivel en el SO (como Round Robin o CFS - Completely Fair Scheduler) que orquestan el Multitasking, decidiendo milisegundo a milisegundo qué proceso activo o hilo debe ingresar al procesador lógico para ejecutarse, optimizando el rendimiento global.",
        "example": "El Scheduler de un servidor divide el tiempo de los núcleos inteligentemente entre un servidor web Node.js atendiendo miles de peticiones REST y un proceso de background ejecutando análisis de imágenes pesadas, balanceando la carga."
      },
      {
        "term": "Estados de un proceso (Listo, Ejecución, Bloqueado)",
        "definition": "Ciclo de vida determinista de un programa: 'Listo' esperando CPU, 'Ejecución' corriendo instrucciones en los registros de CPU, o 'Bloqueado' (Wait State) cuando detiene su ejecución esperando acceso a disco, base de datos o latencia de red.",
        "example": "Un bot de IA basado en Node.js consulta una API externa. Mientras espera la respuesta HTTP, el SO pasa el proceso a estado 'Bloqueado' de forma asíncrona, liberando el procesador para ejecutar otras tareas simultáneas."
      },
      {
        "term": "Paginación de memoria y estructura interna del Kernel",
        "definition": "El Kernel (el núcleo profundo del SO) usa Paginación para mapear bloques de memoria virtual a marcos físicos de RAM (pages). Esto elimina problemas de fragmentación externa y es esencial para el manejo seguro de recursos distribuidos.",
        "example": "Un contenedor de Machine Learning cree tener acceso a memoria contigua, pero internamente el Kernel está traduciendo sus direcciones virtuales en páginas fragmentadas en varios bancos de RAM física mediante la tabla de páginas (MMU)."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Gestión de recursos de hardware concurrentes",
        "definition": "Orquestación del hardware compartido entre múltiples procesos simultáneos, utilizando mecanismos de sincronización como bloqueos de exclusión mutua (Mutex) y semáforos para asegurar la estabilidad y evitar Deadlocks (abrazos mortales).",
        "example": "Dos contenedores de Machine Learning intentan acceder a la misma GPU al mismo tiempo. El SO (mediante los drivers de NVIDIA) orquesta los requerimientos como un cuello de botella seguro, serializando la carga para evitar un colapso (Kernel Panic)."
      },
      {
        "term": "Administración de memoria RAM",
        "definition": "Subsistema del Kernel enfocado en la asignación dinámica (malloc), protección, aislamiento y liberación del espacio de memoria de trabajo. Evita que un código pueda leer el espacio de memoria reservado para otro programa (Sandboxing).",
        "example": "Un servidor cloud ejecuta múltiples APIs de Inteligencia Artificial para diferentes clientes. La administración de RAM del SO aísla el espacio de trabajo para que el script del Cliente A no pueda acceder ni inspeccionar los datos transaccionales del Cliente B."
      },
      {
        "term": "Abstracción del hardware por el núcleo",
        "definition": "Principio arquitectónico donde el Kernel presenta interfaces universales (APIs / Syscalls) hacia el software para interactuar con hardware sin que el programador necesite conocer detalles de ingeniería, marcas de chips o voltajes de los dispositivos físicos.",
        "example": "El código fuente en Python de tu IA usa el comando estándar de guardar archivo ('file.write()') sin importarle si el servidor físico usa un Disco SATA o una unidad SSD NVMe ultra rápida; el Kernel traduce la orden al lenguaje exacto de cada disco."
      }
    ],
    "quiz": {
      "question": "En el contexto de la administración de memoria por parte del Sistema Operativo, ¿qué sucede cuando ejecutas un script de Inteligencia Artificial masivo que demanda mucha más memoria RAM de la que el servidor físico posee instalada?",
      "options": [
        "El hardware genera una descarga eléctrica controlada en la RAM para vaciarla y reiniciar el sistema operativo de forma automática.",
        "El Kernel de inmediato borra el script de Python y desinstala las librerías para proteger el procesador de altas temperaturas.",
        "El Sistema Operativo utiliza la memoria virtual (paginación/swap), reservando un sector del disco duro (SSD/HDD) para mover temporalmente las páginas de memoria inactivas y dejar la RAM libre para el proceso actual.",
        "El procesador convierte los datos pesados en código binario simple (0s y 1s) para que no ocupen espacio de memoria."
      ],
      "answer": 2,
      "explanation": "Correcto. El manejo de la memoria virtual (conocido como Swapping o paginación) es un mecanismo del Kernel. Cuando la RAM física (súper rápida pero limitada) se llena por completo, el SO mueve los procesos temporalmente inactivos a un espacio reservado en el disco de almacenamiento, simulando poseer más RAM a expensas de sacrificar algo de velocidad."
    }
  },
  {
    "id": 6,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "7. Configurar sistemas operativos de código abierto y software licenciado aplicando procesos avanzados de configuración.",
    "il": "7.1 Reconoce los conceptos Multiarranque, directorio, archivo, GUI, herramientas administrativas, herramientas de sistema.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Multiarranque",
        "definition": "Configuración técnica a nivel de firmware (BIOS/UEFI) y sector de arranque que permite coexistir a múltiples sistemas operativos físicos en un mismo host. Utiliza un bootloader para gestionar la carga del Kernel deseado en memoria RAM durante la secuencia de inicio.",
        "example": "Configurar una estación de trabajo (Workstation) para Machine Learning con 'Dual Boot', usando Windows 11 para tareas administrativas corporativas y Ubuntu Linux 22.04 LTS para compilar librerías de Deep Learning nativas de NVIDIA."
      },
      {
        "term": "Estructuras de directorios",
        "definition": "Árbol lógico jerárquico gestionado por el sistema de archivos (Filesystem). En Linux sigue el estándar FHS (Filesystem Hierarchy Standard), montando todo desde un único directorio raíz ('/'), mientras que Windows utiliza unidades lógicas (C:, D:).",
        "example": "Almacenar los datasets crudos en un punto de montaje dedicado (/mnt/data) para evitar saturar la partición principal de Linux (/), optimizando así las lecturas intensivas de los modelos de IA."
      },
      {
        "term": "Tipos de archivos",
        "definition": "Cadenas de bytes estructuradas interpretables por el SO según sus cabeceras (Magic Numbers) y extensiones. Comprenden formatos de texto estructurado, binarios ejecutables, bibliotecas dinámicas (.so, .dll) y serializaciones de modelos (.h5, .pt, .onnx).",
        "example": "Un modelo de red neuronal de PyTorch serializado como archivo '.pt' (binario) en contraste con un archivo de configuración hiperparamétrica guardado en formato texto estructurado '.yaml' o '.json'."
      },
      {
        "term": "Interfaz Gráfica de Usuario (GUI)",
        "definition": "Capa de presentación de alto nivel (como X11 o Wayland en Linux) que renderiza ventanas e interacciones visuales mediante llamadas al servidor gráfico. Suele ser desactivada (Headless) en entornos de servidores de IA para ahorrar memoria y ciclos de CPU.",
        "example": "Desarrollar un modelo IA en un servidor Headless a través de la terminal (CLI), pero exponer los resultados finales de las inferencias en una GUI construida con React y D3.js en el navegador del cliente."
      },
      {
        "term": "Herramientas administrativas avanzadas",
        "definition": "Conjunto de utilidades de sistemas requeridas para la monitorización de recursos (htop, nvtop), gestión de particiones lógicas (LVM), inspección de sockets de red (netstat/ss) y control de accesos privilegiados (sudo/visudo).",
        "example": "Usar la herramienta 'nvtop' en Linux para monitorear en tiempo real la temperatura, consumo de VRAM y carga computacional de múltiples GPUs NVIDIA mientras se entrena una red generativa adversaria (GAN)."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Gestores de arranque (GRUB/LILO)",
        "definition": "Programas críticos alojados en la partición ESP (EFI System Partition) que se ejecutan inmediatamente tras el POST. GRUB (GRand Unified Bootloader) carga la imagen del Kernel (vmlinuz) y el sistema de archivos temporal inicial (initramfs) a la memoria.",
        "example": "Modificar los parámetros del kernel en el archivo '/etc/default/grub' para habilitar IOMMU y permitir pasar de forma directa (Passthrough) la tarjeta gráfica a una máquina virtual de desarrollo de Inteligencia Artificial."
      },
      {
        "term": "Sistemas de archivos NTFS/ext4",
        "definition": "Sistemas de archivos transaccionales. 'ext4' es el estándar moderno en Linux, optimizado para operaciones rápidas de archivos pequeños y extensos, mientras 'NTFS' es el propietario de Windows con soporte avanzado de Control de Listas de Acceso (ACL).",
        "example": "Formatear un disco sólido NVMe en 'ext4' para hospedar millones de imágenes pequeñas de entrenamiento de Computer Vision, asegurando lecturas rápidas sin las penalizaciones de latencia típicas del sistema NTFS heredado."
      },
      {
        "term": "Variables de entorno y permisología de archivos en Linux (chmod/chown)",
        "definition": "Las variables de entorno (como $PATH o $CUDA_HOME) inyectan configuraciones globales a los procesos. Los permisos POSIX (Read/Write/Execute) gestionados mediante chmod y chown aseguran el control de acceso a nivel de archivo para diferentes usuarios (Owner/Group/Others).",
        "example": "Configurar la variable de entorno 'CUDA_VISIBLE_DEVICES=0' para restringir que un script de entrenamiento de Python solo utilice la primera GPU, y asegurar el script con 'chmod 700' para que solo el creador pueda ejecutarlo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Jerarquía lógica de almacenamiento de archivos mediante directorios",
        "definition": "Abstracción proporcionada por el sistema operativo que permite organizar conjuntos masivos de datos (archivos) dentro de 'contenedores lógicos' (directorios o carpetas), facilitando la localización y gestión estructurada de la información.",
        "example": "Estructurar el repositorio de un proyecto de IA separando los scripts en la carpeta '/src', los pesos del modelo en '/models' y las imágenes de prueba en '/data/test', siguiendo las mejores prácticas de ingeniería de software."
      },
      {
        "term": "Organización de carpetas del sistema",
        "definition": "Estructura estandarizada (FHS en Linux) donde cada directorio tiene un propósito estricto: /bin (ejecutables), /etc (configuraciones globales), /var (datos variables y logs), /tmp (archivos temporales) y /home (archivos de usuario).",
        "example": "Revisar los registros de errores del servidor web de IA en la ruta estandarizada '/var/log/nginx/error.log' para diagnosticar por qué las peticiones de inferencia están devolviendo errores HTTP 500."
      },
      {
        "term": "Rutas absolutas y relativas",
        "definition": "Notación para localizar un archivo. La ruta Absoluta describe la ubicación completa desde la raíz principal (ej. /home/user/app/data.csv); la ruta Relativa describe la ubicación con respecto al directorio de trabajo actual (ej. ../data.csv).",
        "example": "Al programar un script en Python para un pipeline de datos, usar rutas relativas (ej. './datasets/train.csv') garantiza que el código funcionará en cualquier servidor o contenedor Docker sin importar dónde se clone el repositorio."
      }
    ],
    "quiz": {
      "question": "Al desarrollar scripts de Inteligencia Artificial colaborativos que serán ejecutados tanto en el entorno local del desarrollador como en contenedores Docker de la nube, ¿por qué es fundamental utilizar 'Rutas Relativas' para cargar los datasets en lugar de 'Rutas Absolutas'?",
      "options": [
        "Porque las rutas relativas evitan el uso de letras y se basan en coordenadas GPS del servidor.",
        "Porque una ruta relativa (ej. './data/dataset.csv') asegura la portabilidad del código, permitiendo que funcione sin importar el directorio raíz en el que se haya clonado el repositorio del proyecto.",
        "Porque las rutas absolutas están cifradas con algoritmos AES-256 y son imposibles de leer sin una contraseña.",
        "Porque las rutas relativas le dicen al sistema de archivos NTFS que fragmente el dataset para entrenar más rápido."
      ],
      "answer": 1,
      "explanation": "Correcto. La portabilidad del código es clave en entornos de IA colaborativos y DevOps. Una ruta absoluta (ej. 'C:/Usuarios/Juan/Proyecto/datos.csv') fallará inmediatamente cuando un compañero intente correr el script en su computadora (o en la nube Linux). Una ruta relativa (ej. './datos.csv') es dinámica y se adapta al directorio de trabajo actual."
    }
  },
  {
    "id": 7,
    "subarea": "Tecnologías de información aplicadas a la inteligencia artificial",
    "nivel": "Décimo",
    "ra": "7. Configurar sistemas operativos de código abierto y software licenciado aplicando procesos avanzados de configuración.",
    "il": "7.2 Distingue procesos avanzados de configuración de sistemas operativos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Configuración avanzada",
        "definition": "Manipulación profunda de parámetros del Kernel, tunning de red (TCP/IP stack) y límites de procesos de usuario (ulimits) diseñados para maximizar el throughput, reducir cuellos de botella y adaptar el SO a cargas de trabajo computacionalmente agresivas.",
        "example": "Aumentar el límite de archivos abiertos ('ulimit -n') en Linux para permitir que un Data Lake procese miles de descriptores de archivos simultáneamente durante el entrenamiento de una red neuronal masiva."
      },
      {
        "term": "Servicios del sistema",
        "definition": "Programas autónomos (Daemons) gestionados por el sistema de inicialización (como Systemd en Linux) que corren de fondo durante el ciclo de vida del SO, proveyendo funcionalidades esenciales como bases de datos, web servers, SSH o motores Docker.",
        "example": "Configurar el servicio 'docker.service' para que se inicie automáticamente tras cada reinicio del servidor, asegurando que todos los contenedores de los modelos de Machine Learning levanten de forma automática."
      },
      {
        "term": "Usuarios y permisos",
        "definition": "Arquitectura de seguridad RBAC incrustada en el SO. Divide el acceso entre usuarios estándar sin privilegios (UID > 1000) y el superusuario root (UID 0), restringiendo las capacidades de modificar binarios críticos o invadir otros procesos.",
        "example": "Crear un usuario de servicio no privilegiado llamado 'ai_worker' específico para ejecutar el modelo en producción. Si el modelo es vulnerado, el atacante no tendrá permisos para dañar el resto del servidor Linux."
      },
      {
        "term": "Automatización de tareas en el sistema operativo",
        "definition": "Construcción de rutinas desatendidas integradas a nivel de SO, permitiendo la ejecución programada o reactiva de scripts administrativos (limpieza, backups) eliminando la intervención manual y reduciendo el error humano (Toil).",
        "example": "Configurar una tarea Cron en el servidor para que ejecute un script Python a las 3:00 a.m. todos los domingos, el cual consolida los logs de interacciones del chatbot de IA y los comprime en un bucket en AWS S3."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Scripts de automatización en Bash o PowerShell",
        "definition": "Archivos ejecutables que agrupan secuencias complejas de comandos CLI, condicionales lógicos (if/else), y bucles para orquestar infraestructuras. Actúan como el puente entre el código del desarrollador y la gestión del sistema operativo.",
        "example": "Escribir un script de Bash ('deploy_model.sh') que descarga automáticamente la última versión del modelo desde Git, detiene el servicio en vivo, compila las nuevas dependencias y reinicia el servidor API."
      },
      {
        "term": "Gestión de daemons/servicios en segundo plano",
        "definition": "El proceso de declarar archivos unitarios (.service en Systemd) que definen cómo el SO debe arrancar, detener, monitorear el estado (PID tracking) y reiniciar procesos de largo aliento en caso de fallos inesperados.",
        "example": "Crear el archivo 'fastapi_ai.service' para indicarle a Linux que inicie tu API de IA usando Gunicorn como Daemon, y que lo reinicie automáticamente si el script colapsa por desbordamiento de memoria."
      },
      {
        "term": "Auditorías de registros de eventos (Logs)",
        "definition": "Recopilación y análisis de flujos de salida (stdout/stderr) generados por aplicaciones, demonios y el kernel, fundamentales para la observabilidad, monitoreo proactivo y respuesta a incidentes de ciberseguridad.",
        "example": "Enviar todos los registros syslog del servidor Linux a un ELK Stack (Elasticsearch, Logstash, Kibana) para detectar proactivamente si un actor malicioso está haciendo fuerza bruta contra un puerto expuesto."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Servicios del sistema operativo (daemons)",
        "definition": "Aplicaciones huérfanas que corren sin requerir una terminal de control adjunta (Headless). Son la columna vertebral de la infraestructura moderna, permitiendo que bases de datos y APIs funcionen ininterrumpidamente 24/7.",
        "example": "El daemon de PostgreSQL operando en segundo plano en un servidor de producción, atendiendo miles de transacciones analíticas por segundo sin necesidad de que un humano inicie sesión."
      },
      {
        "term": "Tareas programadas (cron jobs)",
        "definition": "Demonio temporalizador (cron) que lee tablas de configuración (crontabs) para ejecutar tareas recurrentes con una sintaxis cronológica exacta, crítico para mantenimientos asíncronos en servidores en la nube.",
        "example": "Escribir la regla '0 4 * * 1 /usr/bin/python3 /scripts/retrain_model.py' en el crontab para obligar al servidor a reentrenar la red neuronal con nuevos datos todos los lunes a las 4:00 a.m. en punto."
      },
      {
        "term": "Automatización por consola de comandos",
        "definition": "Práctica DevOps que aprovecha flujos de texto (Pipes) y herramientas GNU (grep, awk) para encadenar operaciones poderosas de filtrado y transformación de datos nativamente en la terminal.",
        "example": "Extraer rápidamente los errores 500 del log de la IA ejecutando el comando: 'cat access.log | grep \"HTTP 500\" | awk '{print $1}' | sort | uniq -c', sin usar editores pesados."
      }
    ],
    "quiz": {
      "question": "En la administración de servidores Linux para Inteligencia Artificial, ¿qué herramienta del sistema operativo utilizarías para asegurar que tu script de la API de predicción (FastAPI) se ejecute automáticamente de fondo al encender la máquina y se reinicie solo si ocurre un fallo fatal?",
      "options": [
        "Un acceso directo en el escritorio de la Interfaz Gráfica (GUI).",
        "Una Tarea Programada (Cron job) configurada para correr una vez al mes.",
        "El Gestor de Sistemas y Servicios (Systemd), creando un archivo '.service' para tratar tu script de IA como un Daemon de fondo con políticas de auto-reinicio.",
        "Un Gestor de Arranque como GRUB que inyecte el código Python directamente en el Kernel."
      ],
      "answer": 2,
      "explanation": "Correcto. Systemd es el estándar actual en Linux para administrar Daemons (servicios en segundo plano). Al crear un 'Unit File' (.service), le indicas al sistema operativo que gestione de forma autónoma el ciclo de vida de tu aplicación (inicio junto al sistema, monitoreo continuo y reinicios automáticos ante colapsos), lo que es crucial para APIs de IA en producción."
    }
  },
  {
    "id": 8,
    "subarea": "Emprendimiento e innovación aplicada a la inteligencia artificial",
    "nivel": "Undécimo",
    "ra": "1. Construir modelos de negocios a partir de ideas innovadoras con propuestas de valor diferenciadoras, utilizando las herramientas y metodologías vigentes.",
    "il": "1.1 Compara las herramientas y metodologías vigentes en la construcción de modelos de negocios.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Modelos de negocios",
        "definition": "Esquema conceptual y financiero que describe la lógica mediante la cual una Startup tecnológica de Inteligencia Artificial diseña soluciones, entrega valor al mercado y genera flujos de ingresos recurrentes de forma sostenible.",
        "example": "El modelo 'Freemium + APIaaS' de OpenAI: ofrece acceso gratuito limitado a ChatGPT para adopción masiva, y cobra a los desarrolladores por tokens consumidos en la API comercial."
      },
      {
        "term": "Lienzo de Modelo de Negocios (Canvas)",
        "definition": "Herramienta de innovación estratégica estructurada en 9 bloques dinámicos. Permite a los emprendedores mapear interdependencias entre segmentos de clientes, estructura de costos, recursos clave y propuesta de valor en una sola matriz.",
        "example": "Al diseñar el Business Model Canvas para una startup de robótica agrícola con IA, se colocan los 'Algoritmos de Computer Vision' en Recursos Clave y las 'Licencias de Software B2B' en la sección de Flujos de Ingresos."
      },
      {
        "term": "Propuestas de valor",
        "definition": "Declaración que articula claramente por qué un producto tecnológico resuelve un 'dolor' (Pain Point) específico del cliente o crea una ganancia de forma significativamente superior a las alternativas existentes en el mercado.",
        "example": "La propuesta de valor de una startup de IA Médica no es 'Software de rayos X', sino 'Reducción del 40% en falsos negativos de diagnóstico pulmonar, salvando vidas y disminuyendo costos de malas praxis para el hospital'."
      },
      {
        "term": "Metodologías ágiles de innovación",
        "definition": "Marcos de trabajo iterativos (como Scrum o Kanban) enfocados en entregar valor temprano y continuo. Fomentan el desarrollo en sprints cortos, permitiendo pivotar rápidamente basándose en la retroalimentación real del usuario.",
        "example": "Un equipo de IA utiliza Scrum con Sprints de 2 semanas; al final del primer sprint entregan un chatbot básico, recogen feedback de los usuarios piloto, y ajustan la arquitectura RAG inmediatamente para el siguiente iteración."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Metodología Lean Startup",
        "definition": "Enfoque fundado por Eric Ries para crear empresas en alta incertidumbre. Se basa en el bucle 'Construir-Medir-Aprender' enfocado en validar hipótesis empíricamente y fallar rápido para reducir el desperdicio de capital y tiempo.",
        "example": "En lugar de gastar 6 meses desarrollando un backend costoso para analizar sentimientos, la startup publica una Landing Page con un video concepto y captura correos de interesados, validando la tracción real del mercado."
      },
      {
        "term": "Producto Mínimo Viable (MVP)",
        "definition": "Versión inicial de un software tecnológico que reúne exclusivamente las características esenciales requeridas para solucionar el problema base de los 'Early Adopters', permitiendo iniciar la validación con el menor esfuerzo de ingeniería.",
        "example": "Para validar un recomendador de ropa con IA, el MVP no usa una red neuronal costosa. Los usuarios suben su foto, y un estilista humano detrás elige la ropa ('Mago de Oz'). Si hay demanda paga, entonces se invierte en programar la IA."
      },
      {
        "term": "Segmentación de mercado",
        "definition": "Estrategia analítica de dividir un universo demográfico heterogéneo en nichos homogéneos con características y puntos de dolor similares (Arquetipos / Buyer Personas), optimizando drásticamente la conversión de ventas B2B o B2C.",
        "example": "Un servicio de transcripción 'Speech-to-Text' por IA decide no vender al público general, enfocándose agresivamente como una herramienta SaaS exclusiva para estudios jurídicos que requieren alta precisión legal en sus dictados."
      },
      {
        "term": "Costeo de operaciones y fuentes de ingresos",
        "definition": "Diseño de viabilidad financiera. Cuantifica los costos operativos (Estructura de Costos de computación en nube, GPUs) frente al modelo de monetización (Flujos de Ingreso: suscripciones MRR, Enterprise o pago por inferencia).",
        "example": "El CTO calcula el costo en centavos de dólar por cada 1000 tokens procesados por el LLM en Amazon AWS, para establecer un precio de suscripción mensual (SaaS) que garantice un Unit Economic positivo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Business Model Canvas (Segmentación, Recursos clave, Estructura de costos, Canales, Flujos de ingresos)",
        "definition": "Lienzo de gestión estratégica orientado al modelo operativo y financiero de la organización. Alinea sistemáticamente actividades principales, alianzas y proyecciones de ROI para fundadores y capitalistas de riesgo (VCs).",
        "example": "Al lanzar una startup de drones autónomos, los socios clave en el Canvas serían empresas manufactureras chinas y reguladores de aviación, mientras que la estructura de costos incluiría los servidores cloud para telemetría."
      },
      {
        "term": "Metodologías ágiles de validación continua",
        "definition": "Sinergia entre Lean Startup y Desarrollo Ágil que obliga a contrastar el software desarrollado contra métricas reales de adopción del mercado, permitiendo pivotar (cambiar el enfoque del negocio) basado en datos en vez de suposiciones.",
        "example": "Una startup lanza una IA de generación de imágenes estilo anime. Las métricas Cloud muestran que el 80% de usuarios son agencias de publicidad, no dibujantes aficionados. El equipo pivota y lanza suscripciones comerciales (Pro) para agencias corporativas."
      }
    ],
    "quiz": {
      "question": "En el contexto de la metodología Lean Startup aplicada a emprendimientos de Inteligencia Artificial, ¿qué es exactamente un 'Producto Mínimo Viable' (MVP) y cuál es su objetivo principal?",
      "options": [
        "Es un prototipo sumamente avanzado, perfecto y sin errores que se lanza al mercado global solo cuando el 100% de sus funcionalidades están listas y programadas.",
        "Es una versión funcional muy básica que contiene solo características esenciales, permitiendo resolver un dolor del cliente temprano (Early Adopter) y recolectar feedback real antes de gastar recursos masivos en desarrollo de IA.",
        "Es el documento legal que debes entregar al gobierno para validar el mínimo de patentes permitidas antes de escribir cualquier línea de código.",
        "Es un framework estricto del Modelo Canvas que establece las jerarquías de los servidores en la nube y el hardware de GPU mínimo."
      ],
      "answer": 1,
      "explanation": "Correcto. El Producto Mínimo Viable (MVP) busca validar la hipótesis principal del negocio lo más rápido posible. En lugar de gastar un año y millones en servidores construyendo un producto complejo de IA a ciegas, lanzas rápidamente una versión funcional (aunque imperfecta), observas cómo reacciona el cliente y ajustas el producto con base en esa evidencia real."
    }
  },
  {
    "id": 9,
    "subarea": "Emprendimiento e innovación aplicada a la inteligencia artificial",
    "nivel": "Undécimo",
    "ra": "2. Aplicar los principios de servicio con un enfoque orientado al cliente en la puesta en marcha del plan de negocio.",
    "il": "2.1 Emplea estrategias de servicio al cliente en la puesta en marcha del plan de negocio.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Servicio al cliente",
        "definition": "Proceso integral de asistencia y asesoría tecnológica antes, durante y después del ciclo de vida de un producto SaaS (Software as a Service) o modelo de Inteligencia Artificial, enfocado en maximizar el éxito del cliente (Customer Success) y minimizar la rotación (Churn).",
        "example": "El equipo de 'Customer Success' de una empresa de Machine Learning ayuda a un cliente corporativo a integrar correctamente una API de análisis de texto en su propio sistema ERP, asegurando que extraigan valor desde el primer día."
      },
      {
        "term": "Estrategias de fidelización",
        "definition": "Tácticas de negocio diseñadas para retener a clientes rentables a largo plazo, construyendo altos costos de cambio (Switching Costs) mediante integraciones tecnológicas profundas, soporte técnico excepcional y mejoras continuas al modelo de IA.",
        "example": "Ofrecer 'Fine-tuning' gratuito del modelo de lenguaje fundacional con los datos privados del cliente después del primer año de suscripción, creando un producto tan adaptado a su empresa que le resulte imposible irse a la competencia."
      },
      {
        "term": "Enfoque orientado al cliente",
        "definition": "Filosofía corporativa 'Customer-Centric' donde todas las decisiones de arquitectura de software, UX/UI y hojas de ruta (Roadmaps) de IA se diseñan estrictamente basándose en los puntos de dolor reales del cliente final, no en caprichos técnicos de los ingenieros.",
        "example": "Rediseñar la interfaz de un dashboard predictivo de inventario para que sea usable por gerentes de almacén que no saben de programación, en lugar de mostrar complejos tensores matemáticos y matrices de confusión."
      },
      {
        "term": "Plan de negocio aplicado",
        "definition": "La ejecución operativa de un modelo teórico. Convierte estrategias abstractas (como el Canvas) en un flujo de trabajo validado con proyecciones financieras claras (Burn Rate), planes de penetración de mercado (Go-To-Market) y SLAs de servicio técnico.",
        "example": "Lanzar un software B2B de recursos humanos con IA, estableciendo en el plan de negocios un SLA (Service Level Agreement) del 99.9% de Uptime en los servidores de inferencia para garantizar el servicio."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Ciclo del servicio",
        "definition": "Mapeo del 'Customer Journey', desde la etapa de concientización y ventas (Acquisition), pasando por la integración técnica (Onboarding), uso recurrente y soporte (Retention), hasta la eventual recomendación (Referral) del producto de IA a otros negocios.",
        "example": "Automatizar la etapa de 'Onboarding' creando documentación interactiva (Swagger/OpenAPI) y un sandbox gratuito para que los desarrolladores del cliente puedan probar la API de reconocimiento facial antes de comprar."
      },
      {
        "term": "Indicadores de satisfacción (NPS)",
        "definition": "El Net Promoter Score (NPS) es una métrica clave que mide la lealtad de la cartera de clientes. Se calcula preguntando en una escala de 0 a 10 qué tan probable es que el cliente recomiende el servicio de IA a un colega (Promotores vs Detractores).",
        "example": "Un modelo SaaS de transcripción automática obtiene un NPS de 70 (excelente) porque su IA tiene una precisión del 99%, lo que causa que los abogados recomienden la plataforma a otros bufetes."
      },
      {
        "term": "Gestión de relaciones con clientes (CRM) y manejo de quejas y objeciones",
        "definition": "Sistemas de software (ej. Salesforce, HubSpot) que centralizan el historial de interacciones, correos y métricas de uso de la cuenta, esenciales para prevenir la fuga de clientes. El manejo de objeciones es la técnica para desarmar dudas técnicas durante ventas B2B.",
        "example": "Un prospecto objeta: 'Su IA es muy cara'. El ingeniero de ventas usa datos del CRM para demostrarle que, aunque la API cuesta $500 al mes, le ahorrará $3,000 en costos operativos por digitación manual de facturas."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Fidelización y Retención de clientes",
        "definition": "Esfuerzos sistemáticos en Startups SaaS para maximizar el LTV (Customer Lifetime Value) reduciendo la tasa de cancelación mensual (Churn Rate). Retener a un cliente existente es estadísticamente 5 veces más barato que adquirir uno nuevo (CAC).",
        "example": "Implementar un modelo de Machine Learning interno que analiza los patrones de uso de los clientes; si un cliente deja de hacer peticiones a la API durante una semana, el sistema envía alertas automáticas al equipo de Customer Success para intervenir."
      },
      {
        "term": "Seguimiento técnico de solicitudes en canales digitales",
        "definition": "Gestión estructurada de incidentes y requerimientos a través de herramientas de Ticketing (Jira Service Desk, Zendesk). Integra flujos de escalamiento (Tier 1 a Tier 3) para resolver bugs o consultas complejas de integración de IA de manera ágil.",
        "example": "Un cliente reporta que la IA está 'alucinando' datos financieros. El equipo de soporte crea un ticket, lo escala (Tier 3) al equipo de Data Scientists, y estos reentrenan el modelo, actualizando al cliente vía Zendesk."
      },
      {
        "term": "Optimización de postventa en pymes tecnológicas",
        "definition": "El diseño de un servicio técnico rentable y escalable post-despliegue, frecuentemente empleando automatización o Chatbots entrenados en la documentación técnica propia (RAG) para reducir costos operativos del equipo humano de soporte.",
        "example": "Una Pyme tecnológica integra un Chatbot con GPT-4 en su página de documentación. El bot puede leer el manual técnico y resolver el 80% de los problemas de integración de API de los clientes al instante, optimizando el costo postventa."
      }
    ],
    "quiz": {
      "question": "En el contexto de una Startup SaaS (Software as a Service) que ofrece servicios de Inteligencia Artificial, ¿por qué es financieramente crítico tener una estrategia sólida de Retención y Fidelización (Customer Success) frente a solo enfocarse en Ventas nuevas?",
      "options": [
        "Porque fidelizar clientes permite que el hardware del servidor en la nube funcione a menor temperatura, ahorrando electricidad.",
        "Porque retener a un cliente existente es significativamente más barato que adquirir uno nuevo (CAC), reduce la tasa de cancelación (Churn) y maximiza el retorno financiero a lo largo de su ciclo de vida (LTV).",
        "Porque es un requisito legal de las certificaciones ISO 9001 enviar correos promocionales diarios a los clientes antiguos para que no borren sus cuentas.",
        "Porque los clientes fidelizados pueden reprogramar el código fuente del modelo de Machine Learning sin pedirle permiso a la empresa."
      ],
      "answer": 1,
      "explanation": "Correcto. En el modelo de negocio de suscripciones (SaaS/Tecnología), el costo de adquirir un cliente nuevo (CAC - Customer Acquisition Cost) por publicidad y ventas es muy alto. Si el cliente abandona el servicio al primer mes (Churn), la empresa pierde dinero. Retenerlo garantiza ingresos recurrentes y rentabilidad a largo plazo (LTV)."
    }
  },
  {
    "id": 10,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "1. Determinar el origen, evolución, importancia, aplicación, así como conceptos relacionados con la inteligencia artificial.",
    "il": "1.1 Distingue conceptos de inteligencia artificial, inteligencia débil, fuerte y súper inteligencia.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Historia de la IA",
        "definition": "Evolución cronológica de la Inteligencia Artificial. Desde el Test de Turing en 1950 y la conferencia de Dartmouth en 1956 (donde se acuñó el término), pasando por los 'Inviernos de la IA' por falta de capacidad de cómputo, hasta la explosión del Aprendizaje Profundo (Deep Learning) en 2012 gracias a las GPUs.",
        "example": "El hito de AlexNet en 2012, una red neuronal convolucional entrenada en tarjetas gráficas (GPUs) que destrozó todos los récords previos en reconocimiento de imágenes, reiniciando la inversión masiva en IA."
      },
      {
        "term": "Evolución tecnológica",
        "definition": "El avance exponencial impulsado por la Ley de Moore (miniaturización de transistores), la Ley de Huang (aceleración paralela por GPUs/TPUs) y la explosión masiva de datos (Big Data) provenientes de internet, los cuales hicieron posible entrenar Redes Neuronales Profundas.",
        "example": "El salto cualitativo de usar CPUs secuenciales en el año 2000 (que tardaban años en entrenar un modelo pequeño) a utilizar clústeres de miles de Tensor Processing Units (TPUs) en 2023 para entrenar modelos LLM de trillones de parámetros en meses."
      },
      {
        "term": "IA débil (estrecha)",
        "definition": "Artificial Narrow Intelligence (ANI). Sistemas diseñados y entrenados para resolver una y solo una tarea hiper-específica con un rendimiento igual o superior al humano, pero carentes de entendimiento general o consciencia. Es la ÚNICA IA que existe actualmente en el mundo.",
        "example": "AlphaGo de Google DeepMind: un sistema que puede derrotar al campeón mundial humano en el complejo juego del Go (tarea estrecha), pero que no sabe cómo jugar a las damas, atarse los zapatos o entender el concepto de la lluvia."
      },
      {
        "term": "IA fuerte (general)",
        "definition": "Artificial General Intelligence (AGI). Un sistema computacional teórico (aún no desarrollado) capaz de comprender, aprender, adaptarse y realizar de manera autónoma cualquier tarea intelectual que un ser humano pueda hacer, transfiriendo conocimiento transversalmente de un dominio a otro.",
        "example": "Un hipotético sistema AGI podría leer todos los manuales de física cuántica, proponer una nueva teoría unificada, y luego escribir un soneto literario al respecto, comprendiendo verdaderamente ambos conceptos abstractos simultáneamente."
      },
      {
        "term": "Súper inteligencia artificial",
        "definition": "Artificial Superintelligence (ASI). Un nivel especulativo de desarrollo donde la inteligencia artificial general (AGI) se mejora a sí misma recursivamente, superando drásticamente a las mentes humanas más brillantes en absolutamente todas las disciplinas científicas, creativas y sociales.",
        "example": "El escenario de 'Singularidad Tecnológica', donde una ASI desarrolla nuevas curas farmacéuticas o fuentes de energía de fusión en segundos, utilizando paradigmas físicos que el cerebro humano es biológicamente incapaz de comprender."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Prueba de Turing",
        "definition": "Experimento mental y prueba práctica propuesta por Alan Turing (1950) para determinar si una máquina puede exhibir comportamiento inteligente indistinguible de un ser humano en una conversación textual a ciegas (Juego de Imitación).",
        "example": "Un modelo de Lenguaje Grande (LLM) conversando por un chat de texto con un juez humano. Si el humano no logra distinguir estadísticamente si está hablando con otro humano o con la máquina, el sistema 'pasa' la prueba de Turing."
      },
      {
        "term": "La habitación china de Searle",
        "definition": "Un experimento mental filosófico propuesto por John Searle que argumenta contra la IA Fuerte. Afirma que un sistema puede manipular símbolos chinos a la perfección para engañar a un nativo, SIN entender ni una sola palabra de chino (Sintaxis no equivale a Semántica).",
        "example": "ChatGPT genera respuestas brillantes en español calculando probabilidades matemáticas de la siguiente palabra (manipulación simbólica sintáctica), pero, según Searle, carece de verdadera 'comprensión semántica' de lo que está diciendo."
      },
      {
        "term": "Hitos de la IA (Deep Blue, AlphaGo) y principios de ética",
        "definition": "Puntos de inflexión técnicos. Deep Blue derrotó a Kasparov en ajedrez (1997) usando fuerza bruta matemática. AlphaGo (2016) derrotó a Lee Sedol usando Aprendizaje por Refuerzo para evaluar posiciones complejas. La ética evalúa sesgos algorítmicos en estas arquitecturas.",
        "example": "La victoria de AlphaGo mediante un movimiento (Movimiento 37) que ningún humano habría considerado lógicamente en 3,000 años de historia del juego, demostrando que el Aprendizaje Automático puede descubrir conocimientos más allá de los programados."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Inteligencia Artificial Débil (IA Estrecha)",
        "definition": "Tecnología no autoconsciente que domina un dominio singular utilizando reconocimiento de patrones matemáticos avanzados en lugar de cognición o raciocinio humano, sirviendo como la base funcional de todas las aplicaciones comerciales actuales.",
        "example": "El algoritmo de recomendación de Netflix es una Inteligencia Estrecha: predice con extrema precisión qué películas te gustarán analizando vectores de miles de usuarios, pero no tiene ninguna capacidad de razonamiento fuera de esa tarea estadística."
      },
      {
        "term": "Ejecución de funciones específicas delimitadas sin autoconsciencia",
        "definition": "El principio de que los modelos modernos (incluyendo LLMs masivos como GPT-4) son estocásticos. No 'piensan' ni 'sienten'; computan funciones matemáticas optimizadas mediante gradiente descendente para mapear entradas (inputs) a salidas (outputs) con el menor margen de error.",
        "example": "Un modelo de Computer Vision en un coche autónomo identifica a un peatón con 99.9% de precisión procesando tensores en su red convolucional, pero no 'sabe' o 'siente' qué es una vida humana ni posee intencionalidad."
      }
    ],
    "quiz": {
      "question": "En la taxonomía de los niveles de Inteligencia Artificial, un sistema de red neuronal que es capaz de analizar radiografías médicas para detectar patologías con una precisión superior al 99% (pero que no puede jugar al ajedrez ni entablar una conversación), ¿a qué clasificación pertenece?",
      "options": [
        "Súper Inteligencia Artificial (ASI).",
        "Inteligencia Artificial Fuerte (AGI), porque supera a los doctores humanos.",
        "Inteligencia Artificial Débil / Estrecha (ANI), porque está diseñada y entrenada para resolver una sola tarea hiper-específica sin poseer raciocinio general.",
        "No es Inteligencia Artificial, es solo una base de datos SQL."
      ],
      "answer": 2,
      "explanation": "Correcto. Toda la inteligencia artificial que existe hoy en día en el mundo real (incluyendo modelos médicos avanzados, AlphaGo, o grandes modelos de lenguaje) se clasifica como IA Estrecha (Artificial Narrow Intelligence). Independientemente de lo potentes que sean en su tarea especializada, carecen de comprensión general del mundo, consciencia y transferibilidad transversal de saberes."
    }
  },
  {
    "id": 11,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "2. Emplear los componentes requeridos en la reparación, actualización, armado y desarmado de computadoras personales aplicando principios de salud ocupacional",
    "il": "2.1 Identifica los componentes que se requieren en las labores de ensamble, actualización y reparación de computadores personales",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Arquitectura de computadoras",
        "definition": "El diseño conceptual y la estructura operacional de un sistema de cómputo basado típicamente en la arquitectura de Von Neumann. En IA, la arquitectura se extiende radicalmente a clústeres heterogéneos y aceleradores tensoriales (GPUs/TPUs).",
        "example": "Diseñar una estación de trabajo (Workstation) para Deep Learning que evita el 'Cuello de Botella de Von Neumann', utilizando carriles PCIe Gen 5 directamente conectados al procesador para que las GPUs no pierdan ciclos esperando datos de la RAM."
      },
      {
        "term": "Componentes de hardware (CPU, RAM, tarjeta madre, almacenamiento)",
        "definition": "La capa física del procesamiento. El CPU ejecuta la lógica secuencial; la RAM aloja datos en uso activo (baja latencia); la Tarjeta Madre enruta los buses de datos y energía; el Almacenamiento asegura la persistencia de datasets masivos.",
        "example": "Para entrenar Inteligencia Artificial, un CPU potente (ej. Threadripper) prepara y orquesta el dataset, mientras que la RAM del sistema alimenta los lotes (batches) hacia la VRAM dedicada de la tarjeta de video, donde ocurre el cálculo matricial pesado."
      },
      {
        "term": "Herramientas de ensamble",
        "definition": "Equipamiento técnico para el montaje, mantenimiento preventivo y reparación física de servidores y estaciones de trabajo. Incluyen destornilladores magnéticos precisos, pastas térmicas especializadas (Thermal Compounds) y equipo de diagnóstico (Multímetros).",
        "example": "Aplicar pasta térmica de alta conductividad a base de metal líquido entre el CPU y el disipador masivo para garantizar que el procesador no sufra estrangulamiento térmico (Thermal Throttling) durante las 72 horas continuas de entrenamiento de un modelo."
      },
      {
        "term": "Salud ocupacional y prevención de daños",
        "definition": "Normativas y técnicas de seguridad industrial (OSHA) enfocadas en proteger la integridad física del ingeniero de hardware (evitando riesgos eléctricos) y proteger los componentes microelectrónicos sensibles contra tensiones estáticas destructivas.",
        "example": "Desconectar la fuente de poder de la toma de corriente, pulsar el botón de encendido para drenar los capacitores residuales de la placa madre, y ponerse protección antiestática antes de instalar una GPU empresarial de $5,000 dólares."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Descarga electrostática (ESD)",
        "definition": "Liberación repentina de electricidad estática acumulada (miles de voltios con amperaje mínimo). Las descargas, aunque invisibles al humano, pueden destruir instantáneamente o degradar las compuertas lógicas nanométricas en memorias y procesadores.",
        "example": "Usar una pulsera antiestática (ESD Wrist Strap) conectada al chasis metálico aterrizado a tierra, o un tapete ESD (Mat), para igualar el potencial eléctrico del cuerpo humano antes de manipular componentes descubiertos."
      },
      {
        "term": "Tipos de zócalos de CPU (LGA/PGA)",
        "definition": "El Socket físico donde interactúa el procesador. En LGA (Land Grid Array), los frágiles pines de contacto están soldados a la placa madre. En PGA (Pin Grid Array), los pines están en la base del procesador. Ambos exigen inserción cero fuerza (ZIF).",
        "example": "Inspeccionar microscópicamente el zócalo LGA de una placa base de servidor. Si un solo pin de contacto está doblado por un mal ensamblaje, el servidor podría no reconocer los canales de memoria RAM o los carriles PCIe de las tarjetas gráficas."
      },
      {
        "term": "Buses de datos (PCIe, SATA) y BIOS/UEFI",
        "definition": "Los 'Buses' son autopistas de circuitos impresos. PCIe (Interconexión Express de Componentes Periféricos) es el bus de altísima velocidad crítico para GPUs y SSDs NVMe. UEFI es el firmware de bajo nivel que inicializa y prueba el hardware (POST).",
        "example": "Configurar en la interfaz UEFI que el puerto M.2 opere en modo 'PCIe Gen 4 x4' en lugar de un modo degradado, garantizando tasas de lectura de 7,000 MB/s para eliminar los cuellos de botella al inyectar terabytes de imágenes en una red convolucional."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Unidades de almacenamiento masivo internas de estado sólido y mecánico (HDD/SSD)",
        "definition": "La jerarquía de persistencia de datos. Los HDD mecánicos ofrecen almacenamiento gigante y barato (Cold Storage) a expensas de lentitud rotacional (IOPS bajos). Los SSD/NVMe ofrecen I/O ultrarrápido mediante celdas flash NAND sin partes móviles.",
        "example": "En un clúster de Inteligencia Artificial, los discos mecánicos (HDD de 20TB) se usan como 'Data Lake' para almacenar datasets masivos en frío; luego, los datos en uso se copian a unidades sólidas (SSD NVMe) para cargarlos a alta velocidad en las GPUs."
      },
      {
        "term": "Diagnóstico de fallas físicas de disco y Sustitución de hardware",
        "definition": "Identificación de degradación crítica de almacenamiento o memorias ECC utilizando tecnología S.M.A.R.T (Self-Monitoring, Analysis and Reporting Technology), o códigos POST (Power-On Self Test) de la placa base, procediendo a mitigación física y reemplazo Hot-Swap.",
        "example": "Un servidor de entrenamiento de IA entra en modo 'Solo Lectura' (Read-Only FS). El ingeniero revisa los reportes S.M.A.R.T, detecta que la unidad SSD NVMe ha agotado sus ciclos máximos de vida de escritura (TBW), y procede a la sustitución física."
      }
    ],
    "quiz": {
      "question": "Un ingeniero está configurando una nueva Workstation para entrenar modelos de Inteligencia Artificial y ha adquirido un disco mecánico HDD de 12 TB y una unidad de estado sólido SSD NVMe de 2 TB. ¿Cuál es la arquitectura óptima para instalar el software y almacenar los datos para obtener el mayor rendimiento computacional?",
      "options": [
        "Instalar todo en el HDD de 12 TB porque tiene mayor capacidad y desechar el SSD NVMe.",
        "Instalar el Sistema Operativo, las librerías de IA y procesar los Datasets de entrenamiento activamente desde el SSD NVMe (por sus altísimas velocidades de lectura/escritura), y utilizar el HDD mecánico como repositorio secundario masivo de archivo en frío (Cold Storage).",
        "Conectar ambos discos al revés y frotarlos con una alfombra para generar una descarga ESD (Electrostática) que formatee los discos de manera segura.",
        "El disco mecánico debe conectarse directamente en el puerto PCIe de la tarjeta de video, y el SSD debe usarse como memoria RAM virtual (Swap)."
      ],
      "answer": 1,
      "explanation": "Correcto. Esta es la arquitectura de jerarquía de datos estándar (Tiering). El almacenamiento de estado sólido (SSD NVMe) brinda tasas de lectura secuencial gigantescas (sobre 5,000 MB/s) requeridas para inyectar lotes (batches) de datos de entrenamiento a la Tarjeta Gráfica sin generar cuellos de botella; mientras que los discos mecánicos (HDD) son ideales como repositorios de muy bajo costo para archivar datos históricos que no están en uso inmediato."
    }
  },
  {
    "id": 12,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "3. Instalar componentes para la actualización de la computadora, realizando la configuración según las necesidades del usuario.",
    "il": "3.1 Aplica procedimientos de mantenimiento preventivo en computadores personales.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Mantenimiento preventivo",
        "definition": "Conjunto de procedimientos programados y sistemáticos realizados en el hardware para mitigar fallas físicas prematuras, optimizar el flujo de aire y extender la vida útil de los componentes microelectrónicos críticos expuestos a cargas de trabajo térmicas intensas.",
        "example": "Programar una limpieza semestral de los servidores de inferencia de IA para eliminar polvo acumulado, previniendo que los sensores térmicos reduzcan la velocidad del reloj de las GPUs para evitar sobrecalentamiento."
      },
      {
        "term": "Limpieza de componentes",
        "definition": "Remoción de residuos conductivos o aislantes térmicos (como polvo o humedad) utilizando disolventes dieléctricos (alcohol isopropílico de alta pureza >99%) y aire comprimido seco, evitando descargas de estática y corrosión en soldaduras delicadas.",
        "example": "Limpiar los contactos de oro de los módulos de memoria RAM DDR5 y las ranuras PCIe de la placa madre utilizando alcohol isopropílico y una brocha antiestática especial para restaurar la conductividad sin dañar las pistas de cobre."
      },
      {
        "term": "Actualización de controladores",
        "definition": "Instalación de las últimas versiones de software de bajo nivel (drivers) provistas por el fabricante del silicio. Optimizan la comunicación entre el sistema operativo y el hardware, parchando bugs de seguridad, mejorando la asignación de memoria y activando aceleraciones específicas.",
        "example": "Actualizar los controladores propietarios de NVIDIA (drivers CUDA) en un servidor de Machine Learning para habilitar la compatibilidad con las últimas librerías de PyTorch, duplicando la velocidad de procesamiento de coma flotante."
      },
      {
        "term": "Diagnóstico de fallas de hardware",
        "definition": "Metodología lógica de aislamiento y resolución de problemas (troubleshooting) que analiza el comportamiento físico y lógico del sistema mediante códigos de diagnóstico, pruebas de esfuerzo (stress tests) y herramientas de monitoreo de telemetría.",
        "example": "Ejecutar una prueba de estrés con la herramienta MemTest86 durante 12 horas en un servidor de IA que se apaga aleatoriamente, identificando que el módulo de RAM en el canal B genera errores de paridad de datos al alcanzar 75°C."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Pasta térmica",
        "definition": "Compuesto fluido de alta conductividad térmica que rellena las imperfecciones microscópicas de aire entre la superficie metálica del disipador de calor (IHS) y el núcleo del chip del procesador (Die), facilitando la transferencia eficiente de calor.",
        "example": "Reemplazar la pasta térmica seca de una GPU por un compuesto con base de diamante o almohadillas térmicas de grafito para reducir la temperatura del procesador gráfico en 15°C durante cargas intensas de inferencia."
      },
      {
        "term": "Códigos de pitidos POST de la placa base",
        "definition": "Señales auditivas emitidas por el altavoz interno (piezoeléctrico) de la placa madre durante la rutina de diagnóstico inicial POST (Power-On Self Test) cuando falla un componente crítico y no es posible inicializar la salida de video.",
        "example": "Escuchar un pitido largo seguido de tres pitidos cortos al encender un servidor de entrenamiento, lo cual indica un fallo grave en la detección o inicialización de la tarjeta de video (GPU), guiando al técnico a reinstalar la tarjeta en su socket."
      },
      {
        "term": "Herramientas de diagnóstico de software y copias de seguridad de controladores",
        "definition": "Software utilitario especializado en monitoreo térmico e inyección de cargas extremas (ej. Prime95, FurMark, HWinfo) junto con utilidades de respaldo (ej. DISM en Windows o dd en Linux) para empaquetar, restaurar y auditar los drivers instalados.",
        "example": "Utilizar HWinfo en conjunto con FurMark para registrar las temperaturas máximas del regulador de voltaje (VRM) de la GPU y exportar los controladores funcionales de red antes de formatear un nodo de cómputo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Termorregulación de procesadores",
        "definition": "Mecanismo de seguridad dinámico integrado en el silicio (Thermal Throttling) que reduce automáticamente la frecuencia de reloj del procesador y su voltaje de operación cuando los sensores internos detectan temperaturas cercanas al límite físico de seguridad (Tjunction), evitando la destrucción térmica.",
        "example": "Un modelo de entrenamiento de IA ve decaer su velocidad de 100 iteraciones por segundo a solo 20. El diagnóstico revela que el procesador está a 98°C y el Thermal Throttling se activó para proteger el hardware debido a que el sistema de enfriamiento líquido se quedó sin fluido."
      },
      {
        "term": "Disipador de calor mecánico",
        "definition": "Bloque pasivo de metal con alta conductividad térmica (generalmente cobre y aluminio) estructurado con aletas delgadas diseñadas para maximizar la superficie de contacto con el aire, absorbiendo el calor del chip mediante conducción física.",
        "example": "Montar un disipador masivo de doble torre con tuberías de calor de cobre (Heatpipes) de contacto directo sobre el procesador para maximizar la conducción hacia las aletas de aluminio."
      },
      {
        "term": "Extracción térmica por ventilación activa",
        "definition": "Mecanismo que utiliza ventiladores mecánicos controlados dinámicamente por modulación por ancho de pulsos (PWM) para forzar un flujo continuo de aire a través de las aletas del disipador de calor, acelerando la disipación convectiva hacia el exterior del chasis.",
        "example": "Configurar la curva de ventilación en la BIOS para que los extractores del chasis del servidor de IA aceleren al 100% de su capacidad cuando la temperatura interna de la tarjeta gráfica supere los 70°C."
      },
      {
        "term": "Mantenimiento preventivo de hardware",
        "definition": "Práctica crítica en la administración de centros de datos y estaciones de alto rendimiento que incluye la sustitución sistemática de elementos degradables (pasta térmica, almohadillas térmicas, ventiladores ruidosos) y limpieza de filtros de aire para mantener las temperaturas de operación dentro del rango óptimo.",
        "example": "Desmontar la GPU empresarial de la estación de trabajo una vez al año para cambiar sus thermal pads desgastados y sopletear el disipador interno con aire comprimido a baja presión para eliminar el polvo compacto."
      }
    ],
    "quiz": {
      "question": "Durante el entrenamiento continuo de un modelo de visión artificial, notas que el rendimiento de procesamiento del servidor decae abruptamente un 70% después de 10 minutos de ejecución. Al revisar la telemetría, detectas que el procesador alcanzó los 99°C. ¿Qué fenómeno físico y de protección está ocurriendo?",
      "options": [
        "Desfragmentación del disco duro sólido para liberar espacio térmico en los transistores.",
        "El fenómeno de Estrangulamiento Térmico (Thermal Throttling), donde el procesador reduce automáticamente su frecuencia de reloj para bajar la generación de calor y evitar daños permanentes en el silicio.",
        "Una descarga electrostática (ESD) de retorno que apaga la GPU de forma preventiva enviando la carga residual a tierra.",
        "El procesador entra en estado de suspensión programada (ACPI S3) para optimizar el consumo de ancho de banda del bus PCIe."
      ],
      "answer": 1,
      "explanation": "Correcto. El 'Thermal Throttling' (estrangulamiento térmico) es un mecanismo de defensa integrado en el procesador. Cuando la temperatura interna alcanza límites peligrosos (usualmente entre 95°C y 105°C) debido a fallas de refrigeración (polvo acumulado, pasta térmica degradada), el chip baja drásticamente su velocidad de reloj (Hz) y su voltaje. Esto disminuye la temperatura pero ralentiza el procesamiento."
    }
  },
  {
    "id": 13,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "4. Determinar cómo las computadoras se comunican en la red.",
    "il": "4.1 Identifica en forma gráfica los tipos de red, sus componentes y dispositivos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Redes de datos",
        "definition": "Infraestructura de comunicación digital compuesta por nodos interconectados (computadoras, servidores, tarjetas de red) que intercambian paquetes de datos utilizando protocolos de red estandarizados como la pila TCP/IP, permitiendo la transferencia distribuida de archivos, comandos y telemetría.",
        "example": "Una red de servidores locales conectados mediante tarjetas de red de fibra óptica de 10 Gbps para transferir y sincronizar gigabytes de imágenes médicas entre nodos de procesamiento de IA."
      },
      {
        "term": "Topologías de red",
        "definition": "La disposición o mapa de las interconexiones en una red. Describe cómo están organizados los cables e interconexiones físicas (Topología Física: Estrella, Malla, Anillo) y cómo fluyen lógicamente los datos a través del medio físico (Topología Lógica).",
        "example": "Diseñar un clúster de supercomputación para IA utilizando una Topología de Malla Completa (Full Mesh) para que cada nodo se comunique con cualquier otro directamente, minimizando la latencia de red en entrenamientos distribuidos."
      },
      {
        "term": "Tipos de red (LAN, WAN, MAN)",
        "definition": "Clasificación de las redes según su alcance geográfico. LAN (Local Area Network) cubre áreas limitadas (un edificio); MAN (Metropolitan Area Network) abarca ciudades; WAN (Wide Area Network) interconecta países mediante proveedores de telecomunicaciones utilizando enrutamiento dinámico.",
        "example": "El laboratorio escolar utiliza una red LAN cableada con cables de par trenzado Cat 6, la cual se conecta a una WAN (Internet) para descargar modelos e instalar librerías de Python desde servidores externos."
      },
      {
        "term": "Componentes y dispositivos de red (routers, switches)",
        "definition": "El hardware de red. Los Switches actúan a nivel de capa 2 del modelo OSI (Enlace de datos), conmutando tramas dentro de una red local LAN mediante direcciones MAC. Los Routers operan a nivel de capa 3 (Red), enrutando paquetes entre redes distintas a través de direcciones IP.",
        "example": "En una oficina, las computadoras de desarrollo se conectan a un switch Gigabit Ethernet para compartir datos de manera ultra rápida localmente, mientras que ese switch se conecta a un router que dirige el tráfico hacia la nube de AWS."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Topologías lógicas vs físicas",
        "definition": "La topología física es el diseño de cableado real y ubicación física de los nodos. La topología lógica es el método por el cual las señales se transmiten a través del medio físico.",
        "example": "Tener un laboratorio cableado físicamente en Estrella (todas las computadoras van a un switch central), pero operando lógicamente como una red Ethernet conmutada bidireccional sin colisiones."
      },
      {
        "term": "Dispositivos intermedios y terminales",
        "definition": "Los Dispositivos Terminales (Hosts) son el origen y destino de la información (PCs, servidores). Los Dispositivos Intermedios (Switches, Routers, Firewalls) regeneran y retransmiten señales de datos, determinando las rutas lógicas del tráfico en la red.",
        "example": "Un servidor de bases de datos de IA actúa como dispositivo terminal; un switch capa 3 y un firewall que filtran las peticiones hacia ese servidor actúan como dispositivos intermedios de red."
      },
      {
        "term": "Redes PAN/WLAN y conceptos de ancho de banda y rendimiento",
        "definition": "PAN (Personal Area Network) abarca redes personales de muy corto alcance (Bluetooth). WLAN (Wireless LAN) es la LAN inalámbrica (Wi-Fi). El Ancho de Banda es la capacidad teórica máxima de transmisión del medio, y el Rendimiento (Throughput) es la velocidad real de datos libres transferidos.",
        "example": "Un programador se conecta a la red WLAN (Wi-Fi 6) de su hogar para programar; su ancho de banda contratado es de 500 Mbps, pero debido a la distancia con el router y las interferencias de la casa, su rendimiento real es de 150 Mbps."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Router (enrutador de paquetes inter-redes)",
        "definition": "Dispositivo inteligente de capa 3 que examina las cabeceras de los paquetes IP entrantes, mantiene tablas de enrutamiento dinámico y toma decisiones lógicas para dirigir el tráfico hacia otras redes independientes de forma eficiente.",
        "example": "Un enrutador empresarial recibe una petición de tu modelo de IA local dirigida a la API de Azure. El router determina cuál es el salto de red de internet más rápido e inyecta los paquetes en la red del proveedor de telecomunicaciones."
      },
      {
        "term": "Switch (conmutador de tramas intra-red local)",
        "definition": "Dispositivo inteligente de capa 2 que crea conexiones temporales punto a punto entre sus puertos físicos. Analiza las direcciones MAC de las tramas entrantes para enviarlas únicamente al puerto del dispositivo destino, eliminando colisiones.",
        "example": "En un clúster de entrenamiento local de IA, un switch de 10 Gbps recibe los tensores calculados por el Nodo de GPU A y los envía directamente y sin demora al Nodo de GPU B usando sus direcciones MAC físicas."
      },
      {
        "term": "Gateway de red por defecto (puerta de enlace)",
        "definition": "La dirección IP asignada a la interfaz interna del router que conecta la red local con redes externas. Actúa como el punto de salida obligatorio para cualquier paquete de datos cuya dirección IP destino no pertenezca a la subred local actual.",
        "example": "Una estación de trabajo tiene la IP local 192.168.1.50. Al intentar consumir un dataset alojado en un servidor web externo, envía los paquetes de datos a la dirección de su Gateway por defecto (192.168.1.1) para que el router los envíe a internet."
      }
    ],
    "quiz": {
      "question": "En la arquitectura de redes LAN y WAN para la transferencia masiva de datasets de Inteligencia Artificial, ¿cuál es la diferencia de funcionamiento técnica entre un Switch y un Router?",
      "options": [
        "El Switch conecta computadoras usando señales inalámbricas Wi-Fi, mientras que el Router requiere soldadura de fibra óptica.",
        "El Switch opera a nivel de capa 2 del modelo OSI y reenvía tramas de datos dentro de la red local (LAN) usando direcciones MAC; mientras que el Router opera en la capa 3 y enruta paquetes de datos entre redes distintas (WAN) usando direcciones IP.",
        "El Switch sirve únicamente para almacenar bases de datos vectoriales en caliente, y el Router sirve para encriptar los discos duros.",
        "Ambos dispositivos hacen exactamente lo mismo a nivel físico y lógico, y sus nombres solo cambian según el fabricante de hardware."
      ],
      "answer": 1,
      "explanation": "Correcto. El Switch es el cerebro de la red local (LAN). Utiliza la dirección MAC física para enviar tramas de datos de forma directa de una computadora a otra en la misma habitación de forma muy rápida y sin colisiones. El Router es el enrutador que conecta esa red local con el mundo exterior (como Internet), leyendo las direcciones IP lógicas para enviar los datos a otras redes."
    }
  },
  {
    "id": 14,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "5. Resolver problemas que se presentan en equipos portátiles y otros dispositivos.",
    "il": "5.1 Fundamenta las acciones que ejecuta en la intervención de equipos portátiles y otros dispositivos; valorando las características técnicas, de hardware, conectividad y configuración para la realización del mantenimiento preventivo; garantizando la adecuada puesta en marcha ante las necesidades del usuario.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Dispositivos portátiles",
        "definition": "Sistemas computacionales completos de factor de forma reducido diseñados para la movilidad. Integran pantallas, baterías recargables y componentes de hardware optimizados para bajo consumo energético sin sacrificar capacidades de cómputo.",
        "example": "Laptops de desarrollo y tabletas profesionales. En IA, se utilizan estaciones de trabajo portátiles equipadas con GPUs de bajo consumo para pruebas rápidas y prototipado local de modelos de redes neuronales."
      },
      {
        "term": "Hardware móvil",
        "definition": "Microarquitectura integrada de silicio (SoC - System on Chip) diseñada para teléfonos inteligentes y dispositivos embebidos. Combina en una sola pastilla de silicio CPUs basados en ARM, GPUs móviles, módems de red celular y coprocesadores de IA dedicados (NPUs).",
        "example": "El chip Apple M3 o el procesador Snapdragon de Qualcomm, los cuales integran una NPU (Neural Processing Unit) diseñada específicamente para acelerar modelos de lenguaje locales (LLMs optimizados) con un consumo de batería mínimo."
      },
      {
        "term": "Conectividad inalámbrica",
        "definition": "Transmisión de datos por radiofrecuencia o microondas sin conexiones físicas. Utiliza estándares como IEEE 802.11 (Wi-Fi) para redes de área local y protocolos de bajo consumo (como Bluetooth) para periféricos y redes IoT.",
        "example": "Un sensor IoT móvil que transmite lecturas de temperatura en tiempo real mediante Bluetooth de bajo consumo a una pasarela (Gateway), la cual consolida los datos y los envía a un modelo predictivo en la nube."
      },
      {
        "term": "Mantenimiento y configuración de laptops y dispositivos inteligentes",
        "definition": "Procedimientos para asegurar la disponibilidad del hardware móvil. Incluye diagnósticos de salud de batería (ciclos de carga), control de perfiles térmicos, sustitución de componentes modulares (RAM, SSD M.2) y actualizaciones de firmware (BIOS/UEFI).",
        "example": "Reemplazar la tarjeta de red inalámbrica M.2 defectuosa de una laptop de desarrollo por una nueva tarjeta compatible con Wi-Fi 6E para optimizar la velocidad de descarga de datasets pesados de la nube."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Componentes internos de una laptop (mini-PCIe, pantallas LCD/OLED, inversores)",
        "definition": "Elementos de hardware miniaturizados. Las ranuras de expansión mini-PCIe o M.2 albergan tarjetas de red o almacenamiento. Las pantallas utilizan tecnologías LCD o matrices auto-emisivas OLED que requieren administración de voltaje delicada a través de inversores.",
        "example": "Desmontar la tapa inferior de una laptop para instalar un segundo disco sólido NVMe en una ranura M.2 libre, duplicando el almacenamiento local para datasets de visión artificial."
      },
      {
        "term": "Administración de energía (ACPI)",
        "definition": "La especificación ACPI (Advanced Configuration and Power Interface) proporciona un estándar industrial para que el sistema operativo controle dinámicamente el consumo de energía del hardware, definiendo estados globales de suspensión (S1-S4) y estados de rendimiento del procesador (P-states).",
        "example": "Configurar el perfil ACPI en la terminal de Linux para impedir que la laptop apague las interfaces PCIe de la tarjeta de video cuando el script de entrenamiento en Python continúe ejecutándose con la tapa de la laptop cerrada."
      },
      {
        "term": "Docking stations y pantallas táctiles",
        "definition": "Las Docking Stations son replicadores de puertos e interfaces de bus rápidas (ej. Thunderbolt) que expanden los puertos limitados de una laptop a periféricos de escritorio. Las pantallas táctiles integran digitalizadores capacitivos que convierten toques físicos en señales de coordenadas.",
        "example": "Conectar una estación de trabajo portátil a una Docking Station Thunderbolt 4 para utilizar dos monitores externos 4K y una conexión cableada de forma simultánea con un solo cable."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Mantenimiento preventivo móvil",
        "definition": "Acciones periódicas en equipos portátiles para evitar fallas físicas. Involucra la limpieza de conductos de ventilación ultra delgados (donde el polvo se acumula fácilmente), calibración de baterías de iones de litio y auditoría de la temperatura interna bajo carga.",
        "example": "Sopletear con aire comprimido a baja presión las rejillas laterales de ventilación de una laptop de desarrollo para eliminar la acumulación de pelusa que eleva la temperatura interna a 90°C al ejecutar inferencias."
      },
      {
        "term": "Modularidad interna en laptops",
        "definition": "El nivel de accesibilidad física para la actualización de componentes. En laptops modernas varía desde sistemas modulares (donde se pueden reemplazar módulos de RAM y discos M.2) hasta sistemas ultra integrados con soldadura BGA donde el hardware no es actualizable.",
        "example": "Adquirir una laptop que mantiene ranuras SO-DIMM para memoria RAM no soldada, permitiendo al departamento de TI ampliar la memoria de 16GB a 64GB en el futuro para desarrollo local de modelos de IA."
      },
      {
        "term": "Tarjetas inalámbricas integradas y fallas de conectividad Wi-Fi portátiles",
        "definition": "Módulos de comunicación de red inalámbrica insertados en zócalos M.2 clave A/E. Las fallas lógicas involucran corrupción de controladores o configuración incorrecta de bandas; las fallas físicas a menudo derivan de la desconexión de los delicados cables coaxiales de la antena interna.",
        "example": "Diagnosticar una laptop que pierde señal Wi-Fi constantemente. Al abrirla, el técnico descubre que uno de los dos cables coaxiales de la antena se soltó del borne U.FL de la tarjeta inalámbrica M.2, procediendo a encajarlo a presión."
      }
    ],
    "quiz": {
      "question": "Al realizar el mantenimiento preventivo y configuración avanzada de una estación de trabajo portátil (laptop) para desarrollo de IA, ¿cuál es una limitación física y arquitectónica crítica a tener en cuenta sobre la modularidad en comparación con un equipo de escritorio (PC Desktop)?",
      "options": [
        "Las laptops no soportan sistemas operativos de 64 bits debido al tamaño físico de sus transistores.",
        "Las laptops modernas suelen tener la CPU, GPU y en ocasiones la memoria RAM soldados directamente a la placa madre (arquitectura BGA), limitando las actualizaciones futuras de hardware a periféricos externos o unidades SSD en ranuras M.2 libres.",
        "Las laptops requieren recargarse únicamente mediante ondas de radio de conectividad inalámbrica Bluetooth.",
        "Las pantallas OLED de las laptops no son compatibles con interfaces de desarrollo en modo terminal (CLI)."
      ],
      "answer": 1,
      "explanation": "Correcto. A diferencia de los equipos de escritorio (donde la tarjeta madre permite cambiar de procesador en el zócalo LGA/PGA o reemplazar la GPU en la ranura PCIe), las laptops están diseñadas bajo restricciones estrictas de espacio. El procesador y el chip de video suelen ir soldados por matriz de bolas (BGA) a la placa. Por ello, la modularidad interna se limita generalmente a actualizar el disco duro sólido (SSD M.2) o ampliar la RAM si posee ranuras SO-DIMM no soldadas."
    }
  },
  {
    "id": 15,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "6. Analizar aspectos del entorno, requeridos para la implementación de seguridad en equipos, datos, la red y la función del profesional de Tecnologías de Información.",
    "il": "6.1 Identifica las amenazas generales que justifican la implementación de seguridad básica en equipos, datos y redes",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Amenazas a la seguridad",
        "definition": "Cualquier evento o acción potencial (intencionada o accidental) que pueda comprometer la integridad, confidencialidad o disponibilidad de los activos digitales de una organización, tales como servidores de bases de datos, APIs de producción o redes internas.",
        "example": "Un ataque de denegación de servicio distribuido (DDoS) dirigido a los servidores de inferencia de una IA que inhabilita el bot de soporte de una empresa durante horas de alto tráfico comercial."
      },
      {
        "term": "Malware de red",
        "definition": "Software malicioso (virus, gusanos, ransomware, troyanos) diseñado para propagarse a través de protocolos de red, explotando vulnerabilidades en puertos desprotegidos para infectar sistemas, secuestrar datos o crear puertas traseras (backdoors) de acceso remoto.",
        "example": "Un ransomware que ingresa a la subred corporativa a través de un puerto RDP expuesto e infecta y encripta recursivamente todos los servidores de almacenamiento del Data Lake de la empresa."
      },
      {
        "term": "Vulnerabilidades de infraestructura",
        "definition": "Defectos en el diseño, configuración, implementación o gestión de la infraestructura física o digital (ej. firmwares desactualizados, malas configuraciones en firewalls) que pueden ser explotados por atacantes para obtener accesos no autorizados.",
        "example": "Dejar abiertos puertos SSH de desarrollo con la contraseña por defecto en una máquina virtual en la nube, lo que facilita que bots automatizados hackeen el servidor en minutos."
      },
      {
        "term": "Seguridad física y lógica",
        "definition": "La seguridad física comprende los controles tangibles para proteger el hardware (cámaras de seguridad, tarjetas de acceso, guardias). La seguridad lógica abarca las barreras de software y red (firewalls, cifrado, control de acceso RBAC, autenticación).",
        "example": "El centro de datos utiliza control biométrico de acceso para proteger los servidores físicos de GPU (seguridad física) y utiliza firewalls y políticas de Zero Trust para evitar accesos remotos no autorizados (seguridad lógica)."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Ataques Man-in-the-Middle (MitM)",
        "definition": "Técnica de interceptación donde un atacante se sitúa en medio del canal de comunicación lógico entre el cliente y el servidor, permitiéndole leer, modificar o inyectar paquetes de datos maliciosos de forma transparente.",
        "example": "Interceptar las llamadas API que un cliente realiza a un modelo de IA en un hotspot Wi-Fi público desprotegido para robar las claves API de acceso que viajan sin cifrado HTTPS."
      },
      {
        "term": "Spoofing de IP/MAC",
        "definition": "Suplantación de identidad en la red. El IP Spoofing altera la dirección IP origen en la cabecera del paquete para saltarse firewalls basados en IP; el MAC Spoofing modifica la dirección MAC física de la tarjeta de red para engañar a los switches o saltarse filtros ACL de red local.",
        "example": "Un atacante modifica la dirección MAC de su laptop para imitar la dirección de una impresora autorizada de la oficina, logrando saltarse la seguridad del puerto del switch (Port Security) y conectarse a la red LAN local."
      },
      {
        "term": "Políticas de contraseñas seguras y auditoría de accesos físicos",
        "definition": "Reglas de control de acceso que obligan al uso de contraseñas complejas y rotativas junto con un registro y análisis sistemático (logs de auditoría) de entradas y salidas físicas de personal en salas de servidores críticamente sensibles.",
        "example": "Configurar el Active Directory para exigir contraseñas de más de 12 caracteres con caracteres especiales, y revisar mensualmente los logs de la puerta biométrica del cuarto de servidores para detectar accesos en horas no laborables."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Análisis proactivo de vulnerabilidades del sistema de red",
        "definition": "Uso de herramientas de escaneo (ej. Nmap, Nessus, OpenVAS) para auditar de forma preventiva la red, buscando puertos abiertos no autorizados, servicios con exploits conocidos y configuraciones inseguras antes de que sean explotados por un atacante.",
        "example": "Programar un escaneo automático con Nmap todos los domingos en la subred de servidores para alertar si un desarrollador expuso un puerto de base de datos PostgreSQL a internet sin querer."
      },
      {
        "term": "Ataques de spoofing",
        "definition": "Cualquier ataque basado en la falsificación de cabeceras de protocolos de comunicación (como IP, MAC, DNS o ARP) para engañar a los sistemas de seguridad y redirigir el tráfico legítimo hacia hosts controlados por el atacante.",
        "example": "Realizar un ataque de ARP Spoofing en la red local enviando respuestas ARP falsas para asociar la dirección MAC del atacante con la dirección IP del Gateway, permitiéndole interceptar todo el tráfico saliente."
      },
      {
        "term": "Aseguramiento lógico de endpoints y servidores de datos",
        "definition": "La práctica de endurecimiento (Hardening) de sistemas operativos de servidores y dispositivos cliente mediante la desactivación de servicios innecesarios, uso de firewalls locales (iptables/ufw), cifrado de disco y software EDR (Endpoint Detection and Response).",
        "example": "Habilitar el cifrado BitLocker/LUKS en las laptops de los científicos de datos que contienen código y datos propietarios de la empresa, previniendo la fuga de información si la laptop es robada."
      }
    ],
    "quiz": {
      "question": "En ciberseguridad para infraestructuras de red, ¿cuál es la descripción técnica y el peligro de un ataque de ARP/MAC Spoofing en una red local LAN?",
      "options": [
        "Es un virus que borra el firmware de la BIOS/UEFI de la placa base a través de la tarjeta de red.",
        "Es la suplantación de la identidad física de un nodo de red (MAC) o el envío de respuestas ARP falsas al switch, lo que permite al atacante interceptar o desviar el tráfico legítimo (Man-in-the-Middle) de la red local.",
        "Es un tipo de ataque físico donde el atacante corta el cable de fibra óptica para obligar a usar Wi-Fi.",
        "Es una técnica de encriptación simétrica avanzada que protege los endpoints y servidores contra accesos no autorizados."
      ],
      "answer": 1,
      "explanation": "Correcto. El Spoofing (suplantación) a nivel de Capa 2 (enlace de datos) abusa del protocolo ARP o de las direcciones MAC. Al enviar respuestas ARP falsas, el atacante asocia su dirección MAC con la IP de otra máquina (como el router/gateway). Esto provoca que el switch le envíe a él tramas que no le pertenecen, facilitando ataques de interceptación (Man-in-the-Middle)."
    }
  },
  {
    "id": 16,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Décimo",
    "ra": "7. Explicar procedimientos para la confidencialidad, integridad y disponibilidad de los datos.",
    "il": "7.1 Identifica las medidas o controles para la confidencialidad, integridad y disponibilidad de los datos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Tríada CIA (Confidencialidad, Integridad, Disponibilidad)",
        "definition": "El pilar fundamental de la seguridad de la información. Confidencialidad: garantizar que solo personal autorizado acceda a los datos. Integridad: asegurar que la información no sea modificada sin autorización. Disponibilidad: garantizar el acceso confiable a los sistemas cuando se requiera.",
        "example": "Cifrar la base de datos de clientes (Confidencialidad), utilizar firmas digitales o hashes SHA-256 para evitar alteraciones de los datos (Integridad), y desplegar servidores de respaldo balanceados en la nube (Disponibilidad)."
      },
      {
        "term": "Controles de acceso",
        "definition": "Mecanismos técnicos y administrativos que restringen el acceso lógico a redes, sistemas y archivos. Se rigen bajo el principio de menor privilegio, exigiendo procesos de identificación, autenticación (verificación) y autorización (permisos).",
        "example": "Implementar un sistema de acceso basado en tokens temporales (OAuth2) que solo permite a las aplicaciones del cliente leer datos de predicciones de IA, pero les prohíbe realizar modificaciones en la base de datos de entrenamiento."
      },
      {
        "term": "Políticas de seguridad",
        "definition": "Conjunto formal de directrices, reglas y procedimientos establecidos por una organización para proteger sus activos de información y definir las responsabilidades de los empleados en el manejo de tecnología y datos sensibles.",
        "example": "Una política que prohíbe a los desarrolladores subir claves de acceso o tokens de AWS a repositorios públicos de GitHub, exigiendo el uso de administradores de secretos (como HashiCorp Vault)."
      },
      {
        "term": "Respaldos de datos",
        "definition": "Copia duplicada de archivos, bases de datos o sistemas de archivos completos almacenados en un medio de almacenamiento secundario o en la nube, con el fin de restaurar el estado operativo original en caso de pérdida, corrupción o ataques de ransomware.",
        "example": "Programar copias automáticas diarias de la base de datos de estudiantes en un almacenamiento redundante y fuera del sitio (Off-site), garantizando la recuperación ante fallas del servidor local."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Tipos de respaldos (Completo, Incremental, Diferencial)",
        "definition": "Completo: copia la totalidad de los datos. Incremental: copia únicamente los datos modificados desde el último respaldo (completo o incremental), ahorrando espacio. Diferencial: copia los datos modificados desde el último respaldo completo, facilitando restauraciones más rápidas.",
        "example": "Hacer un respaldo completo los domingos (100 GB), un incremental los lunes y martes (solo 2 GB de cambios diarios), optimizando la velocidad del backup y el ancho de banda nocturno de la red local."
      },
      {
        "term": "Control de acceso basado en roles (RBAC)",
        "definition": "Modelo de seguridad que asigna permisos y privilegios lógicos basándose en el 'Rol' o función laboral del usuario dentro de la organización, en lugar de asignar accesos individuales de manera desorganizada.",
        "example": "En una plataforma médica con IA: un usuario con rol de 'Médico' puede ver el historial del paciente; un rol de 'Data Scientist' puede ver datos anonimizados para entrenar modelos; y un rol de 'Recepcionista' no tiene acceso a datos médicos."
      },
      {
        "term": "Autenticación multifactor (MFA) y RAID",
        "definition": "MFA añade capas adicionales de seguridad exigiendo al usuario algo que sabe (contraseña) y algo que tiene (código OTP en app móvil). RAID (Redundant Array of Independent Disks) es una tecnología que combina múltiples discos físicos para lograr tolerancia a fallas de hardware y velocidad.",
        "example": "Exigir MFA a los administradores para entrar al panel de AWS Cloud, y configurar un arreglo de discos RAID 5 en el servidor físico local para que el sistema siga funcionando si un disco duro de base de datos falla eléctricamente."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Enlaces de Red Privada Virtual (VPN)",
        "definition": "Tecnología de red que crea una extensión virtual y cifrada de la red local (LAN) a través de una red pública (Internet), permitiendo que los dispositivos remotos envíen y reciban datos de forma segura como si estuvieran físicamente en la oficina.",
        "example": "Un programador trabaja desde su casa y se conecta a la VPN de la empresa utilizando un cliente OpenVPN, permitiéndole interactuar de forma segura con la base de datos corporativa interna sin exponerla directamente a internet."
      },
      {
        "term": "Protocolos de tunelización cifrada para teletrabajo seguro",
        "definition": "Protocolos que encapsulan y cifran los paquetes de datos para su transmisión segura a través de la VPN. Los estándares modernos como IPsec (Internet Protocol Security), OpenVPN y WireGuard implementan algoritmos de cifrado simétrico robustos (como AES-256 o ChaCha20).",
        "example": "Configurar un túnel cifrado con WireGuard para interconectar de forma segura dos sucursales físicas de la organización, garantizando que todo el tráfico de datos inter-sucursales esté protegido contra interceptaciones de terceros."
      },
      {
        "term": "Protección del tráfico de datos corporativos",
        "definition": "Estrategias de encriptación en tránsito y en reposo. Asegura que los flujos de comunicación internos y los datos almacenados utilicen criptografía fuerte, reduciendo la superficie de ataque frente a filtraciones de datos y espionaje industrial.",
        "example": "Forzar que todas las comunicaciones de la base de datos requieran conexiones SSL/TLS y que los discos duros de los servidores utilicen cifrado a nivel de volumen para proteger los datos corporativos de la startup."
      }
    ],
    "quiz": {
      "question": "En una organización tecnológica que procesa datos personales y médicos con Inteligencia Artificial, ¿cómo aplicarías correctamente la Estrategia de Respaldo 3-2-1 para garantizar la Disponibilidad (Tríada CIA) ante un ataque de ransomware devastador?",
      "options": [
        "Crear 3 contraseñas idénticas, guardarlas en 2 computadoras diferentes y subirlas a 1 canal público de Slack.",
        "Mantener al menos 3 copias de los datos importantes, almacenadas en 2 soportes físicos diferentes (ej. disco sólido local y NAS), y almacenar 1 de esas copias fuera del sitio o en la nube de forma aislada (Off-site / Inmutable).",
        "Comprar 3 discos duros mecánicos idénticos, conectar 2 en paralelo y destruir 1 para demostrar tolerancia a fallas físicas.",
        "Realizar copias incrementales cada 3 segundos hacia el mismo disco duro del servidor principal para evitar latencias de red."
      ],
      "answer": 1,
      "explanation": "Correcto. La regla de oro del respaldo 3-2-1 establece: 3 copias de los datos (la de producción y 2 backups), en 2 soportes diferentes (para mitigar fallos del medio físico, ej. disco interno y un disco externo o NAS), y 1 copia fuera del sitio o en la nube (para proteger los datos de desastres físicos locales o ataques de ransomware que infectan toda la red local)."
    }
  },
  {
    "id": 17,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Undécimo",
    "ra": "8. Explicar las características, formas de comunicación y tendencias en redes que afectan el uso de éstas en las pequeñas y medianas empresas.",
    "il": "8.1 Reconoce los componentes de redes LAN y WAN en pequeñas y medianas empresas.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Infraestructura de red para PyMEs",
        "definition": "El diseño e implementación de la red de datos interna para una Pequeña o Mediana Empresa. Requiere un equilibrio costo-beneficio, implementando cableado estructurado, switches conmutados gestionables, puntos de acceso Wi-Fi comerciales y un gateway seguro para internet.",
        "example": "Diseñar la red de una PyME de desarrollo utilizando un router Mikrotik como Gateway de seguridad, un Switch gestionable PoE de 24 puertos para las computadoras de oficina, y 3 Access Points para proveer conectividad Wi-Fi de alta velocidad."
      },
      {
        "term": "Características de LAN y WAN",
        "definition": "LAN: red interna caracterizada por altísima velocidad (1 Gbps a 100 Gbps), bajísima latencia y control total del administrador. WAN: red externa caracterizada por velocidades variables dependientes del proveedor, mayores latencias de enrutamiento y uso de enlaces dedicados o VPNs.",
        "example": "El backend de la PyME consulta la base de datos PostgreSQL local en la LAN en menos de 1 milisegundo; sin embargo, al conectarse a una API de IA externa en una red WAN, la latencia sube a 45 milisegundos debido al enrutamiento público."
      },
      {
        "term": "Dispositivos de comunicación y tendencias tecnológicas",
        "definition": "Hardware moderno que facilita la interconectividad. Incluye firewalls físicos dedicados de próxima generación (NGFW), balanceadores de carga de hardware y el despliegue de redes definidas por software (SDN) para simplificar la gestión centralizada del tráfico.",
        "example": "Integrar un firewall NGFW Fortinet en la PyME para analizar en tiempo real el tráfico de red de los empleados, bloqueando de forma automatizada conexiones sospechosas hacia redes Command & Control de malware."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Líneas arrendadas",
        "definition": "Enlaces de comunicación de datos simétricos y exclusivos dedicados contratados con un proveedor de servicios (ISP). Conectan dos ubicaciones geográficas de forma directa sin compartir el medio con otros clientes, garantizando ancho de banda constante y SLAs del 99.99%.",
        "example": "Contratar una línea arrendada de fibra óptica simétrica de 100 Mbps entre la sede principal de la PyME y su centro de datos local para garantizar el tráfico constante y la sincronización de bases de datos."
      },
      {
        "term": "Tecnologías DSL",
        "definition": "Digital Subscriber Line. Tecnología de transmisión de datos por banda ancha que utiliza las líneas telefónicas de cobre tradicionales. Permite transferir datos de alta velocidad en frecuencias más altas sin interferir con el servicio de voz (ej. ADSL, VDSL).",
        "example": "Una pequeña sucursal que utiliza una conexión VDSL2 de 50 Mbps de bajada y 10 Mbps de subida a través de la línea de cobre del proveedor local para acceder a herramientas administrativas en la nube."
      },
      {
        "term": "Cablemódem",
        "definition": "Dispositivo de red que modula y demodula señales de datos a través de la infraestructura de televisión por cable coaxial (estándar HFC/DOCSIS), compartiendo el medio físico de transmisión con otros suscriptores en la misma zona geográfica.",
        "example": "Utilizar una conexión corporativa por cablemódem DOCSIS 3.1 en la PyME para obtener altas velocidades de descarga (hasta 300 Mbps) para los equipos administrativos."
      },
      {
        "term": "Redes celulares en WAN corporativas",
        "definition": "Uso de tecnologías celulares de banda ancha móvil (4G LTE / 5G) como enlaces de red WAN principales en zonas remotas, o como enlaces de respaldo redundantes y automáticos (Failover) si la conexión principal de fibra óptica física se corta.",
        "example": "Configurar el router MikroTik de la PyME con un módem USB 5G para que, si un camión rompe el cable de fibra óptica de la oficina, la red cambie de forma automática al enlace celular en menos de 3 segundos."
      },
      {
        "term": "Y conceptos iniciales de computación en el borde (Edge Computing)",
        "definition": "Paradigma que procesa y analiza los datos en la periferia de la red (cerca de la fuente de origen de los datos, como sensores o cámaras locales) en lugar de enviar todos los datos crudos a servidores en la nube centralizados, reduciendo el ancho de banda y la latencia.",
        "example": "Instalar una minicomputadora (ej. NVIDIA Jetson) junto a la cámara de seguridad para procesar localmente el reconocimiento de matrículas de vehículos, enviando a la nube únicamente el texto de la matrícula en lugar de transmitir el video 4K constante por la WAN."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Segmentación por redes de área local virtuales (VLANs)",
        "definition": "Tecnología de conmutación de capa 2 que divide una única red física LAN en múltiples subredes lógicas independientes y aisladas (etiquetado 802.1Q). Evita tormentas de broadcast y restringe la comunicación directa entre subredes por motivos de seguridad y rendimiento.",
        "example": "Configurar una VLAN 10 para los servidores y las GPUs de entrenamiento, una VLAN 20 para las computadoras de desarrollo de los programadores, y una VLAN 30 de Invitados para el Wi-Fi público, aisladas completamente entre sí."
      },
      {
        "term": "Escalabilidad lógica de infraestructura física de pymes",
        "definition": "La capacidad de diseñar una topología de red modular que permita el crecimiento ordenado en el número de usuarios, dispositivos y servicios en una PyME, sin necesidad de rediseñar toda la red física o cambiar equipos estructurales costosos.",
        "example": "Adquirir switches gestionables apilables (Stackable Switches) de manera que, al duplicarse el personal de la empresa, simplemente se conecte un switch adicional mediante un cable de apilamiento para gestionarlo como una sola entidad lógica de red."
      },
      {
        "term": "Aislamiento de tráfico",
        "definition": "Práctica de seguridad en redes que restringe e impide la intercomunicación directa de dispositivos en diferentes subredes lógicas (VLANs) a menos que pasen explícitamente a través de reglas de control de acceso (ACLs) y filtrado de puertos en un router o firewall.",
        "example": "Implementar una regla en el Firewall de forma que los usuarios conectados a la red Wi-Fi de invitados (VLAN 30) tengan prohibido realizar ping o intentar conectarse a la subred de servidores de bases de datos (VLAN 10)."
      }
    ],
    "quiz": {
      "question": "En el diseño de la infraestructura de red para una PyME tecnológica que desarrolla y despliega software de Inteligencia Artificial, ¿cuál es el beneficio principal de implementar segmentación de red mediante VLANs (Virtual LANs)?",
      "options": [
        "Aumentar el almacenamiento físico del disco duro del servidor de bases de datos de IA.",
        "Permitir la intercomunicación caótica y directa de todos los dispositivos de la empresa para acelerar las descargas de internet.",
        "Dividir la red física en subredes lógicas completamente aisladas entre sí (ej. separar el Wi-Fi de invitados de los servidores de desarrollo), reduciendo tormentas de broadcast y mejorando la seguridad del tráfico interno.",
        "Obligar a los switches a operar únicamente a nivel inalámbrico por ondas de radio de telefonía móvil 5G."
      ],
      "answer": 2,
      "explanation": "Correcto. La segmentación mediante VLANs es una de las mejores prácticas de seguridad y rendimiento en redes. Permite aislar lógicamente diferentes departamentos o tipos de dispositivos. Si un atacante ingresa a la red de Wi-Fi de invitados, la VLAN evitará que pueda escanear o atacar los servidores de bases de datos o de desarrollo alojados en una VLAN distinta, a menos que el firewall lo permita explícitamente."
    }
  },
  {
    "id": 18,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Undécimo",
    "ra": "9. Analizar el rol de los protocolos y las organizaciones de estándares que facilitan la interoperabilidad en las comunicaciones de red, y cómo los dispositivos en la Red de Área Local (LAN) acceden a los recursos en la red de pequeñas y medianas empresas.",
    "il": "9.1 Diferencia los modelos de referencia de red (TCP/IP y OSI).",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Modelos de red",
        "definition": "Marcos teóricos y arquitecturas de referencia en capas que estandarizan el diseño y las funciones de los protocolos de comunicación de datos, garantizando la interoperabilidad global entre sistemas heterogéneos de hardware y software.",
        "example": "El diseño de un sistema distribuido donde un servidor Linux y un cliente macOS intercambian datos usando sockets TCP/IP estandarizados sin preocuparse por la diferencia de sistemas operativos."
      },
      {
        "term": "Arquitectura del Modelo OSI (7 capas)",
        "definition": "Modelo de referencia de Interconexión de Sistemas Abiertos (OSI) creado por la ISO. Divide el flujo de red en 7 capas conceptuales y lógicas independientes: Física, Enlace de datos, Red, Transporte, Sesión, Presentación y Aplicación.",
        "example": "Mapear el trayecto de un mensaje: desde el navegador (Capa 7 - Aplicación), cifrándose con TLS (Capa 6 - Presentación), abriendo la conexión TCP (Capa 4 - Transporte), hasta convertirse en bits en la fibra óptica (Capa 1 - Física)."
      },
      {
        "term": "Modelo TCP/IP (4 capas)",
        "definition": "El modelo práctico de referencia y suite de protocolos en el que se basa la internet moderna. Se estructura en 4 capas funcionales: Acceso a la Red, Internet, Transporte y Aplicación.",
        "example": "Configurar la pila de protocolos en un contenedor Docker que expone una API REST: el contenedor gestiona la capa de Aplicación (HTTP) y la capa de Transporte (TCP) sobre la red virtual interna."
      },
      {
        "term": "Comparación y funciones de cada capa",
        "definition": "Análisis comparativo de las capas del modelo OSI y TCP/IP, definiendo cómo interactúan secuencialmente y qué funciones específicas cumple cada una (ej. direccionamiento lógico en la capa de red frente a direccionamiento físico en enlace).",
        "example": "Identificar que el protocolo de enrutamiento IP actúa en la capa de Internet (TCP/IP) o Red (OSI), mientras que el protocolo de control de flujo TCP opera en la capa de Transporte en ambos modelos."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Proceso de encapsulamiento y desencapsulamiento de datos",
        "definition": "El encapsulamiento es el proceso por el cual los datos de la aplicación bajan por la pila de protocolos, y cada capa le agrega sus propios encabezados de control (Headers) y remates (Trailers). El desencapsulamiento es el proceso inverso en el receptor.",
        "example": "Una petición HTTP de la IA se encapsula: se le añade un encabezado TCP en la capa de transporte, luego un encabezado IP en la capa de red, y finalmente una cabecera Ethernet en la capa de enlace para enviarse por el cable físico."
      },
      {
        "term": "Unidades de Datos de Protocolo (PDU: Segmento, Paquete, Trama, Bits)",
        "definition": "La estructura de datos específica que caracteriza a cada capa de red. En la capa de Transporte se llama Segmento (TCP) o Datagrama (UDP); en la capa de Red, Paquete; en la de Enlace de datos, Trama; y en la capa Física, Bits.",
        "example": "Un analizador de paquetes (como Wireshark) captura una 'Trama' Ethernet del puerto de red; al abrirla, revela un 'Paquete' IP interno, el cual contiene un 'Segmento' TCP, el cual a su vez transporta datos de texto estructurado."
      },
      {
        "term": "Y organismos de estandarización (IEEE, IETF, ISO)",
        "definition": "Entidades globales que regulan, definen y mantienen los estándares de protocolos de red. La IEEE define estándares físicos y de enlace (ej. 802.3 Ethernet, 802.11 Wi-Fi); la IETF define estándares de internet y protocolos (RFCs); la ISO establece marcos organizacionales.",
        "example": "Revisar el estándar oficial RFC 793 de la IETF para programar un socket de red que maneje correctamente los flags de sincronización (SYN/ACK) del protocolo TCP."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Estándares internacionales de interoperabilidad industrial",
        "definition": "Conjunto de normativas e interfaces técnicas globales que aseguran que dispositivos de diferentes marcas (ej. Cisco, Juniper, servidores Dell) puedan comunicarse de forma transparente en un entorno de red unificado.",
        "example": "Configurar un router Cisco para comunicarse con un switch HP utilizando el protocolo estándar LACP (IEEE 802.3ad) para agregación de enlaces en lugar de protocolos propietarios."
      },
      {
        "term": "Arquitectura en capas del Modelo OSI",
        "definition": "Diseño modular de red que aísla las funciones específicas de comunicación en niveles independientes, permitiendo modificar los protocolos de una capa (ej. cambiar de cable UTP a fibra óptica en la Capa 1) sin afectar el funcionamiento de las capas superiores (como la aplicación).",
        "example": "Actualizar el software de la base de datos (Capa de Aplicación) en un clúster de servidores de IA sin requerir ningún cambio físico en el cableado o las tarjetas de red físicas (Capa Física)."
      },
      {
        "term": "Funciones específicas de las capas superiores",
        "definition": "Responsabilidades de las capas 5 (Sesión: control del diálogo de comunicación), 6 (Presentación: formateo, compresión y cifrado de datos) y 7 (Aplicación: interfaz directa para el software de usuario como navegadores o clientes API).",
        "example": "El cifrado TLS 1.3 que encripta la comunicación bancaria en la Capa de Presentación (OSI) para asegurar que los datos del usuario lleguen seguros e intactos a la aplicación."
      }
    ],
    "quiz": {
      "question": "Durante el viaje de una petición HTTP desde un cliente de IA hacia una base de datos en la nube, ¿cómo se denominan y secuencian las Unidades de Datos de Protocolo (PDU) a medida que los datos viajan desde la capa de Transporte hasta el medio físico?",
      "options": [
        "Comienza como Paquete, se transforma en Trama, luego en Bits, y finalmente se segmenta en la base de datos.",
        "Comienza en la Capa de Transporte como Segmento (TCP), se encapsula en la Capa de Red como Paquete (IP), baja a la Capa de Enlace como Trama (Ethernet), y se transmite en la Capa Física como Bits.",
        "Se convierte todo en una única base de datos SQL inmutable que viaja codificada en código Morse.",
        "El router transforma los bits en tramas y luego las disipa en forma de calor para enfriar la CPU."
      ],
      "answer": 1,
      "explanation": "Correcto. El proceso de encapsulamiento baja por la pila de protocolos asignando una PDU específica en cada nivel: en la capa de Transporte se generan 'Segmentos' (con puertos de origen/destino); en la de Red se estructuran en 'Paquetes' (con IPs de origen/destino); en la de Enlace se encuadran como 'Tramas' (con MACs de origen/destino); y en la Física se transmiten como impulsos eléctricos o de luz llamados 'Bits'."
    }
  },
  {
    "id": 19,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Undécimo",
    "ra": "10. Evaluar protocolos, servicios de capa física y el rol de la capa de enlace de datos en el soporte a las comunicaciones a través de redes de datos.",
    "il": "10.1 Diferencia las características y usos adecuados de los medios de transmisión.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Medios de transmisión guiados (par trenzado, fibra óptica) y no guiados (Wi-Fi, satelital)",
        "definition": "La infraestructura física del canal de red. Los medios guiados canalizan las señales a través de vías físicas sólidas (cables de cobre de par trenzado o hilos de vidrio para luz láser). Los no guiados propagan ondas electromagnéticas libremente por el aire o espacio.",
        "example": "Conectar los servidores del clúster de IA mediante fibra óptica multimodo para lograr transferencias de 100 Gbps libres de ruido electromagnético, y usar Wi-Fi 6 en las oficinas para las laptops de los desarrolladores."
      },
      {
        "term": "Capa física y enlace de datos",
        "definition": "Las capas 1 y 2 de OSI. La Capa Física (L1) gestiona la transmisión de bits puros sobre el medio físico (voltajes, pulsos de luz, frecuencias). La Capa de Enlace de datos (L2) estructura esos bits en tramas lógicas, realiza control de errores físico y direcciona físicamente.",
        "example": "La tarjeta de red de la laptop codifica una trama de red local (L2) en patrones de voltaje eléctrico que se envían a través de los pines de cobre del cable RJ-45 (L1) hacia el switch."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Categorías de cable UTP (Cat5e, Cat6, Cat6a)",
        "definition": "Clasificación de los cables de par trenzado no blindados según sus especificaciones de frecuencia y tasa de transferencia. Cat 5e: hasta 1 Gbps a 100 MHz; Cat 6: hasta 10 Gbps (en distancias cortas) a 250 MHz; Cat 6a: 10 Gbps constantes hasta 100 metros a 500 MHz.",
        "example": "Cablear el laboratorio de informática con cable UTP Cat 6a para garantizar velocidades estables de 10 Gbps entre las estaciones de entrenamiento de redes neuronales y el almacenamiento NAS."
      },
      {
        "term": "Estándares de cableado T568A/T568B",
        "definition": "Normativas de la TIA/EIA que definen el orden de distribución de los 8 hilos de cobre de colores dentro del conector RJ-45. Un cable directo utiliza el mismo estándar en ambos extremos (T568B en ambos), mientras que un cable cruzado usa T568A en uno y T568B en el otro.",
        "example": "Ponchar un cable de red directo utilizando la secuencia de colores del estándar T568B (blanco-naranja, naranja, blanco-verde, azul, blanco-azul, verde, blanco-marrón, marrón) en ambos conectores RJ-45 para conectar una PC a la toma de pared."
      },
      {
        "term": "Atenuación",
        "definition": "Pérdida de la fuerza o amplitud de la señal electromagnética a medida que viaja por el medio de transmisión, limitando la distancia física máxima permitida para el cableado sin requerir repetidores.",
        "example": "El límite de distancia oficial para un cable Ethernet UTP de cobre es de 100 metros debido a que la atenuación degrada la señal eléctrica haciendo imposible que el receptor decodifique los bits."
      },
      {
        "term": "Interferencia electromagnética (EMI)",
        "definition": "Perturbación o ruido electromagnético no deseado inducido en los cables de cobre por fuentes eléctricas externas (motores, luces de alta intensidad, cables de alta tensión), provocando corrupción de datos y retransmisiones de red.",
        "example": "Separar las canaletas del cableado estructurado UTP al menos 30 cm de los cables de energía eléctrica de la oficina para evitar que la EMI induzca ruidos que corrompan las tramas de la red local."
      },
      {
        "term": "Y métodos de control de acceso al medio (CSMA/CD y CSMA/CA)",
        "definition": "Protocolos de capa de enlace que regulan cómo los dispositivos comparten el medio de transmisión. CSMA/CD (Ethernet cableado) detecta colisiones de señales eléctricas y retransmite. CSMA/CA (Wi-Fi inalámbrico) evita colisiones solicitando permiso (RTS/CTS) antes de transmitir.",
        "example": "En una red Wi-Fi saturada, los dispositivos usan CSMA/CA para escuchar el canal y esperar a que el aire esté libre de ondas antes de inyectar sus paquetes de radiofrecuencia, previniendo colisiones invisibles en el aire."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Protocolos e interfaces de Capa Física y de Enlace",
        "definition": "Estándares integrados que controlan la modulación y acceso físico de la señal. Definen detalles desde el voltaje eléctrico de los conectores hasta el control lógico de enlace (LLC) y control de acceso al medio (MAC) en la capa 2.",
        "example": "Configurar la tarjeta de red de un servidor para que negocie de forma automática su velocidad y duplexado (Auto-Negotiation) utilizando el protocolo estándar de enlace Ethernet 802.3."
      },
      {
        "term": "Estándar Ethernet cableado",
        "definition": "La especificación IEEE 802.3 que define las conexiones de red LAN físicas por cable, estableciendo las reglas de direccionamiento, formatos de trama y control de colisiones para comunicaciones cableadas rápidas y estables.",
        "example": "Desplegar fibra óptica bajo el estándar 10GBASE-SR para conectar el switch del núcleo con los servidores del clúster de IA de la PyME, asegurando enlaces de 10 Gbps estables."
      },
      {
        "term": "Redes inalámbricas locales (IEEE 802.11 / Wi-Fi)",
        "definition": "Normativas para redes inalámbricas de área local que operan en frecuencias de 2.4 GHz, 5 GHz y 6 GHz, utilizando espectro ensanchado para transmitir datos a través del aire hacia puntos de acceso inalámbricos locales (APs).",
        "example": "Configurar un Access Point empresarial bajo el estándar Wi-Fi 6 (802.11ax) para permitir que múltiples dispositivos móviles de desarrollo transmitan datos pesados simultáneamente utilizando la tecnología OFDMA."
      }
    ],
    "quiz": {
      "question": "Al estructurar el cableado físico de una oficina técnica, un instalador pasa un cable UTP Cat 6 de cobre de 120 metros de longitud de un extremo a otro del edificio y nota que la velocidad cae a 10 Mbps y se pierden paquetes constantemente. ¿Qué fenómeno de la Capa Física está afectando el rendimiento y cómo se soluciona?",
      "options": [
        "El fenómeno es la Interferencia Electromagnética (EMI), y se soluciona soldando los pines del conector RJ-45 con metal líquido.",
        "El fenómeno es la Atenuación (pérdida de fuerza de la señal eléctrica debido a la distancia de 120 metros, superando el límite de 100m de cobre), y se soluciona colocando un Switch intermedio que actúe como repetidor activo, o reemplazando el tramo largo con Fibra Óptica.",
        "Es un fallo de colisiones detectado por CSMA/CA, y se soluciona configurando el router en modo monomodo.",
        "El cable sufrió una descarga ESD al frotarse con las canaletas, y requiere formatearse la memoria RAM del switch."
      ],
      "answer": 1,
      "explanation": "Correcto. El cobre tiene límites de distancia física debido a la atenuación (resistencia eléctrica del material a lo largo del cable). El estándar IEEE 802.3 para cables UTP limita la distancia máxima a 100 metros. Para distancias mayores, la señal decae drásticamente y genera errores de transmisión. Se corrige colocando un dispositivo intermedio (como un switch) que regenere la señal, o utilizando fibra óptica que transporta luz con una atenuación casi nula en distancias largas."
    }
  },
  {
    "id": 20,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Undécimo",
    "ra": "11. Evaluar el funcionamiento del protocolo Ethernet y cómo el protocolo de resolución de direcciones permite la comunicación en la red.",
    "il": "11.1 Diferencia las tablas de direccionamiento MAC.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Protocolo Ethernet",
        "definition": "La suite de protocolos de capa 2 estándar más utilizada en redes LAN locales cableadas, responsable de encuadrar los datos de internet en tramas estructurales y controlar el acceso físico al medio de transmisión.",
        "example": "El adaptador de red de tu computadora recibe paquetes IP y los encapsula bajo el protocolo de tramas Ethernet 802.3 antes de inyectarlos como señales eléctricas en el cable UTP."
      },
      {
        "term": "Direccionamiento físico",
        "definition": "El uso de la dirección MAC (Media Access Control) de 48 bits, grabada de fábrica en la tarjeta de red (NIC). Se representa en formato hexadecimal y es única globalmente, sirviendo para identificar dispositivos de forma física dentro de una subred local.",
        "example": "Un switch de red local lee que una trama entrante tiene la dirección MAC destino '00:0a:95:9d:68:16' y la envía exclusivamente al puerto físico donde está conectado ese dispositivo exacto."
      },
      {
        "term": "Tramas Ethernet",
        "definition": "La Unidad de Datos de Protocolo (PDU) de la Capa de Enlace. Encapsula paquetes de red agregando un preámbulo de sincronización, direcciones MAC de origen y destino, tipo de protocolo superior, los datos reales de carga útil y una secuencia de verificación de trama (FCS) para detectar errores.",
        "example": "Al viajar por la LAN local, los datos de tu petición de IA están envueltos en una trama Ethernet que mide típicamente entre 64 y 1518 bytes de longitud total."
      },
      {
        "term": "Funcionamiento y tablas del protocolo ARP (direcciones MAC)",
        "definition": "El protocolo ARP (Address Resolution Protocol) mapea y resuelve direcciones IP conocidas (Capa 3) a direcciones MAC físicas correspondientes (Capa 2). La Tabla ARP es la caché local en memoria RAM que almacena de forma temporal estas asociaciones IP-MAC.",
        "example": "Tu computadora quiere enviar un archivo a la IP 192.168.1.15. Primero revisa su Tabla ARP local; si no encuentra la MAC asociada, envía una solicitud ARP Broadcast ('¿Quién tiene la IP 192.168.1.15?') a toda la red local."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Estructura de la trama Ethernet (Preámbulo, Direcciones Destino/Origen, Tipo, Datos, FCS)",
        "definition": "Los campos internos de la trama: el Preámbulo (sincroniza relojes receptores), Direcciones MAC Destino/Origen, Tipo (indica si transporta IPv4 o ARP), Datos (carga útil de 46 a 1500 bytes) y la secuencia FCS (Frame Check Sequence) que usa un hash CRC-32 para validar si la trama se corrompió en el cable.",
        "example": "La tarjeta de red destino calcula el CRC sobre la trama recibida; si el resultado no coincide con el campo FCS de la trama, asume que sufrió interferencia y la descarta de inmediato para evitar procesar datos corruptos."
      },
      {
        "term": "Inundación de unicast desconocido y comando arp -a",
        "definition": "La inundación (Unicast Flooding) ocurre cuando un switch recibe una trama dirigida a una MAC que no está en su tabla de direcciones MAC, forzando al switch a enviarla por todos los puertos excepto por el de origen. El comando 'arp -a' despliega la caché de resolución ARP actual en el SO.",
        "example": "Ejecutar la terminal de comandos del desarrollador y escribir 'arp -a' para ver al instante la lista de todas las IPs locales de la oficina vinculadas a sus direcciones MAC físicas correspondientes."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Purga y actualización automática de las Tablas de Direcciones MAC de switches Capa 2",
        "definition": "Mecanismo por el cual un switch de red aprende dinámicamente las direcciones MAC analizando la dirección de origen de cada trama recibida en sus puertos físicos, asociando esa MAC con el puerto correspondiente. Las entradas se borran automáticamente tras un tiempo de inactividad (normalmente 300 segundos).",
        "example": "Un servidor se desconecta del puerto 5 y se conecta al puerto 8. El switch actualiza de forma automática su tabla interna tras leer la primera trama enviada por el servidor, redirigiendo el tráfico subsiguiente al nuevo puerto físico."
      },
      {
        "term": "Solución a duplicidad o saturación de tramas de red",
        "definition": "Estrategias lógicas e ingenieriles para evitar problemas de bucles de red en topologías redundantes (ej. tormentas de broadcast que inundan los puertos) mediante la implementación obligatoria del protocolo Spanning Tree Protocol (STP - IEEE 802.1D).",
        "example": "Configurar el switch para que el protocolo STP mantenga lógicamente desactivado uno de los dos cables redundantes conectados entre switches, habilitándolo automáticamente solo si el cable principal se daña físicamente."
      }
    ],
    "quiz": {
      "question": "Cuando ejecutas el comando 'arp -a' en la terminal de tu computadora de desarrollo y deseas enviar un paquete de datos a un servidor local con la IP 192.168.1.100, ¿qué acción lógica realiza el sistema si esa IP NO se encuentra en su Tabla ARP caché?",
      "options": [
        "El sistema genera una pantalla azul de la muerte por desbordamiento del bus PCIe de red.",
        "Envía una solicitud ARP Broadcast en formato de trama Ethernet con la dirección MAC destino 'FF:FF:FF:FF:FF:FF' preguntando a toda la LAN quién posee esa IP; la máquina con esa IP responde directamente con su dirección MAC física, y tu PC actualiza su caché ARP local.",
        "El sistema busca la base de datos DNS en la red WAN para asignarle una dirección MAC virtual.",
        "La PC detiene el sistema operativo hasta que un técnico escriba manualmente la dirección MAC usando comandos de PowerShell."
      ],
      "answer": 1,
      "explanation": "Correcto. Si una dirección IP destino local no está en la caché de la tabla ARP, tu computadora no sabe a qué dirección MAC de la Capa 2 enviar la trama por el cable. Por ende, envía una solicitud ARP Broadcast (dirigida a la dirección MAC de difusión universal FF:FF:FF:FF:FF:FF). Todos los dispositivos de la LAN leen la petición, pero solo el dispositivo con la IP correspondiente responde informando su dirección MAC física, permitiendo reanudar la comunicación."
    }
  },
  {
    "id": 21,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Undécimo",
    "ra": "12. Configurar las direcciones IPv4 e IPv6 de manera que proporcionen conectividad en redes de pequeñas y medianas empresas.",
    "il": "12.1 Diferencia las direcciones IPv4 (unicast, broadcast y multicast) e IPv6 (unicast, anycast, multicast).",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Direccionamiento IP",
        "definition": "Identificador numérico lógico y jerárquico asignado a cada dispositivo (Host) conectado a una red que utiliza el protocolo de internet (IP). Permite la localización exacta y el enrutamiento de paquetes de datos a nivel global.",
        "example": "Asignar la dirección IP estática 192.168.1.50 a una estación de trabajo de IA para que pueda ser localizada de forma consistente dentro de la red del laboratorio."
      },
      {
        "term": "Clases e IPv4",
        "definition": "Direccionamiento de 32 bits representado en 4 octetos decimales separados por puntos. Históricamente dividido en Clases (A, B, C para hosts; D para multicast; E para investigación), limitado a 4.3 mil millones de direcciones, lo que aceleró la transición a IPv6.",
        "example": "Identificar que la dirección 192.168.0.1 pertenece a la Clase C (con máscara por defecto 255.255.255.0), reservando los primeros 3 octetos para la red y el último para el host."
      },
      {
        "term": "Tipos de transmisión IPv4",
        "definition": "Métodos de propagación de datos: Unicast (envío de un host a otro host único), Multicast (envío de un host a un grupo de interés específico) y Broadcast (envío de un host a todos los dispositivos de la subred local usando la dirección de difusión).",
        "example": "Un servidor DHCP que envía un mensaje de oferta de IP por Broadcast (255.255.255.255) para que cualquier máquina nueva de la subred reciba y configure sus parámetros de red."
      },
      {
        "term": "Formato y tipos de direcciones IPv6",
        "definition": "Direccionamiento de 128 bits representado en 8 grupos de 4 dígitos hexadecimales separados por dos puntos. Elimina la necesidad de NAT, carece de transmisiones de Broadcast (usa Multicast en su lugar) e implementa autoconfiguración nativa (SLAAC).",
        "example": "Representar y simplificar la dirección IPv6 '2001:0db8:0000:0000:0000:ff00:0042:8329' utilizando las reglas de abreviación para obtener '2001:db8::ff00:42:8329'."
      },
      {
        "term": "Enrutamiento básico",
        "definition": "El proceso por el cual un dispositivo de red (como un router) reenvía paquetes hacia su red destino analizando la dirección IP destino y consultando su tabla de rutas para elegir la interfaz de salida y el siguiente salto (Next Hop).",
        "example": "Configurar una ruta estática en el router local indicando que todo el tráfico dirigido a la subred de servidores 10.0.0.0/24 debe enviarse a través de la interfaz GigabitEthernet 0/1."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Máscaras de subred de longitud variable (VLSM)",
        "definition": "Subnetting avanzado que permite dividir un espacio de direcciones IP en múltiples subredes de diferentes tamaños adaptadas a las necesidades reales de hosts de cada departamento, optimizando y evitando el desperdicio de direcciones IP.",
        "example": "Tomar la red principal 192.168.1.0/24 y usar VLSM para asignar una subred de 60 hosts para Desarrollo (/26), una de 12 hosts para Ventas (/28) y una de 2 hosts para el enlace WAN entre routers (/30)."
      },
      {
        "term": "Cálculo de subredes",
        "definition": "El proceso matemático binario de tomar prestados bits de la porción de host de una dirección IP para agregarlos a la porción de red, permitiendo crear subredes lógicas independientes a partir de una única dirección de red base.",
        "example": "Calcular que al aplicar una máscara /27 a la red 192.168.1.0 se obtienen 8 subredes utilizables, donde cada subred soporta hasta 30 direcciones IP asignables a hosts reales."
      },
      {
        "term": "Direcciones IPv4 privadas (RFC 1918)",
        "definition": "Rangos de direcciones IPv4 reservados exclusivamente para uso interno en redes locales LAN (no enrutables en internet): 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16. Requieren traducción de direcciones (NAT) para salir a internet.",
        "example": "El router de tu casa asigna la IP privada RFC 1918 '192.168.1.15' a tu computadora, y traduce esa IP a la dirección IP pública provista por tu ISP cuando navegas en la web."
      },
      {
        "term": "Link-Local de IPv6 y la abreviación de direcciones IPv6",
        "definition": "Link-Local (prefijo fe80::/10) es una dirección IPv6 no enrutable obligatoria autoconfigurada por cada interfaz física, usada para comunicaciones locales de enlace. La abreviación se realiza omitiendo ceros a la izquierda y reemplazando grupos de ceros consecutivos por un único '::' (solo una vez).",
        "example": "Simplificar la dirección local 'fe80:0000:0000:0000:02aa:00ff:fe9a:431b' como 'fe80::2aa:ff:fe9a:431b' para facilitar su lectura y configuración en el sistema."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Dirección IPv6 de enlace local (prefijo fe80::/10)",
        "definition": "Dirección IPv6 autogenerada mediante el protocolo SLAAC o el método EUI-64. Se limita estrictamente al enlace local (misma subred) y es esencial para el funcionamiento del protocolo de descubrimiento de vecinos (NDP) que reemplaza a ARP en IPv6.",
        "example": "Dos servidores de IA conectados al mismo switch físico se comunican e intercambian telemetría local utilizando sus direcciones de enlace local auto-asignadas con prefijo 'fe80::'."
      },
      {
        "term": "Transmisiones de Broadcast en IPv4 vs esquemas Multicast nativos de IPv6",
        "definition": "IPv4 depende de Broadcast para enviar datos a todos (saturando a dispositivos que no requieren la información). IPv6 elimina el Broadcast por completo, implementando esquemas Multicast eficientes (prefijo ff00::) y Anycast, reduciendo drásticamente el tráfico de red innecesario.",
        "example": "En IPv4, una solicitud ARP se envía a todas las MACs físicas de la red mediante Broadcast; en IPv6, la resolución de direcciones usa la dirección Multicast de Nodo Solicitado (Solicited-Node Multicast), molestando únicamente a la máquina destino."
      }
    ],
    "quiz": {
      "question": "En la transición de arquitecturas de red hacia IPv6, ¿cuál es una de las diferencias de funcionamiento y rendimiento más críticas respecto al direccionamiento y distribución de tráfico en comparación con IPv4?",
      "options": [
        "IPv6 reduce el tamaño de las direcciones a 16 bits para evitar interferencias de radiofrecuencia.",
        "IPv6 elimina por completo el uso de transmisiones de Broadcast (difusión a todos) en la subred, sustituyéndolo por esquemas Multicast dirigidos a grupos de interés específicos y direcciones Link-Local (fe80::/10), optimizando el ancho de banda y la CPU de los hosts.",
        "IPv6 requiere forzosamente el uso de traductores NAT en cada computadora para poder enrutar paquetes en la LAN local.",
        "Las direcciones IPv6 solo pueden escribirse en código decimal estructurado y no admiten abreviaciones con dos puntos (::)."
      ],
      "answer": 1,
      "explanation": "Correcto. Una de las grandes optimizaciones de IPv6 es la eliminación del Broadcast (difusión a todos), el cual saturaba la red local enviando paquetes innecesarios a hosts que no los requerían (como las peticiones ARP en IPv4). IPv6 utiliza esquemas Multicast selectivos y direcciones Link-Local obligatorias (fe80::/10) autoconfiguradas para mantener comunicaciones eficientes a nivel de enlace de datos."
    }
  },
  {
    "id": 22,
    "subarea": "Introducción a la inteligencia artificial y redes de dispositivos",
    "nivel": "Undécimo",
    "ra": "13. Explicar cómo los protocolos y servicios de la capa de aplicación y transporte soportan las comunicaciones y las aplicaciones de usuario final, a través de redes de datos.",
    "il": "13.1 Reconoce los protocolos de la capa de transporte y funcionamiento de las capas de aplicación, presentación y sesión del modelo OSI.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Protocolos de transporte (TCP y UDP)",
        "definition": "Protocolos de Capa 4 de OSI encargados de la entrega de datos extremo a extremo entre aplicaciones. TCP (Transmission Control Protocol) es orientado a conexión, confiable y controla el flujo. UDP (User Datagram Protocol) no es orientado a conexión, es rápido, ligero y no garantiza la entrega.",
        "example": "Usar TCP para realizar llamadas API REST de IA (donde no se tolera la pérdida de caracteres) y usar UDP para transmitir video de cámaras de seguridad en tiempo real hacia el modelo de visión artificial."
      },
      {
        "term": "Puertos",
        "definition": "Identificadores numéricos lógicos de 16 bits (de 0 a 65535) en la Capa de Transporte que permiten direccionar los datos hacia un proceso o servicio de software específico dentro de un mismo sistema operativo.",
        "example": "El servidor web de producción de tu API de IA escucha en el puerto 80 (HTTP) o puerto 443 (HTTPS), mientras que la base de datos PostgreSQL escucha peticiones internas en el puerto 5432."
      },
      {
        "term": "Servicios de capa de aplicación (DNS, HTTP, DHCP, FTP, SMTP)",
        "definition": "Protocolos de Capa 7 de OSI que proveen servicios directos a las aplicaciones del usuario final. DNS resuelve nombres; HTTP transfiere hipertexto y JSON; DHCP asigna IPs dinámicas; FTP transfiere archivos; SMTP envía correos electrónicos.",
        "example": "Una aplicación web de IA utiliza el protocolo HTTP para recibir las preguntas de los usuarios y utiliza DNS para resolver el dominio de su base de datos remota antes de conectarse."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Establecimiento de conexión TCP (Handshake de 3 vías)",
        "definition": "El protocolo de inicialización de conexión de TCP que asegura la sincronización de puertos y números de secuencia. Se ejecuta mediante el envío secuencial de tres paquetes de control: SYN (sincronizar), SYN-ACK (sincronizar y confirmar) y ACK (confirmar).",
        "example": "Antes de que un script de Python pueda realizar una consulta SQL a la base de datos externa, los adaptadores de red ejecutan de forma invisible el saludo de 3 vías (SYN -> SYN-ACK -> ACK) para abrir el canal lógico."
      },
      {
        "term": "Números de secuencia y acuse de recibo",
        "definition": "Mecanismos de control de confiabilidad de TCP. El emisor numera cada byte de datos enviado (Número de Secuencia), y el receptor responde indicando el siguiente byte que espera recibir (Acuse de recibo o Acknowledgment - ACK), permitiendo retransmitir datos perdidos.",
        "example": "Si el paquete con el número de secuencia 102 se pierde en la red debido a congestión, el receptor no enviará el ACK correspondiente, forzando al emisor TCP a retransmitir el paquete automáticamente."
      },
      {
        "term": "Ventanas dinámicas",
        "definition": "Mecanismo de control de flujo de TCP (Sliding Window) donde el receptor indica en sus cabeceras la cantidad máxima de bytes que puede almacenar en sus buffers sin saturarse. El emisor ajusta dinámicamente la velocidad de envío basándose en este valor.",
        "example": "Un servidor de IA lento saturado de consultas reduce su tamaño de ventana a cero (Zero Window), obligando al cliente a pausar temporalmente el envío de más consultas hasta que el servidor procese los datos en memoria."
      },
      {
        "term": "Y funcionamiento del protocolo DHCP (DORA)",
        "definition": "El ciclo de cuatro pasos de DHCP para la asignación dinámica de IPs a clientes de forma secuencial: Discover (el cliente busca el servidor), Offer (el servidor ofrece una IP), Request (el cliente solicita usar esa IP) y Acknowledgment (el servidor confirma y asigna la IP).",
        "example": "Conectar tu laptop al Wi-Fi de la oficina y ver que obtiene la IP 192.168.1.120 de forma automática tras completar internamente la secuencia DORA en menos de un segundo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Capa de Transporte: UDP (protocolo no orientado a conexión, baja latencia, pérdida tolerable en streaming/videollamadas) frente a TCP (orientado a conexión, control de flujo, entrega garantizada)",
        "definition": "El trade-off fundamental de Capa 4. TCP garantiza la entrega secuencial sin errores a costa de mayor latencia (debido al handshake, ACKs y retransmisiones). UDP prioriza la velocidad y la baja latencia, enviando datos sin verificar la recepción, ideal para transmisiones en tiempo real.",
        "example": "Para un sistema de telemedicina con IA: el audio de la llamada se transmite por UDP (si se pierde un frame, el audio salta un milisegundo pero continúa fluido), mientras que los datos clínicos y diagnósticos se transmiten por TCP para evitar cualquier error de dígitos."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de microservicios de Inteligencia Artificial que requieren transferir de forma crítica archivos de configuración hiperparamétrica (donde un solo bit corrupto inutiliza el modelo) y flujos de video de cámaras web en vivo (donde se requiere latencia sub-milisegundo tolerando pequeñas pérdidas de fotogramas), ¿qué protocolos de la Capa de Transporte elegirías para cada tarea?",
      "options": [
        "Usar UDP para los archivos de configuración por su velocidad, y TCP para el video para garantizar que no falte ningún pixel.",
        "Usar TCP para transferir los archivos de configuración (garantizando entrega libre de errores y en orden mediante ACKs y retransmisiones) y usar UDP para el flujo de video en vivo (minimizando la latencia al evitar handshakes y retransmisiones).",
        "Desactivar la Capa de Transporte y enviar los archivos directamente a través de señales físicas de fibra óptica analógica.",
        "Usar el protocolo HTTP de capa de aplicación en ambos casos, ya que HTTP no requiere de TCP o UDP para transmitir datos."
      ],
      "answer": 1,
      "explanation": "Correcto. El trade-off de la Capa 4 es clave: TCP es confiable y libre de errores porque implementa control de flujo y retransmisión de paquetes perdidos, ideal para transferir archivos delicados (código, configuraciones, bases de datos). UDP no garantiza entrega ni orden, pero elimina el retardo de confirmaciones, lo que lo hace perfecto para streaming en tiempo real (video, llamadas) donde la baja latencia es prioritaria."
    }
  },
  {
    "id": 23,
    "subarea": "Bases de datos",
    "nivel": "Undécimo",
    "ra": "1. Explicar los elementos que forman parte del modelado de datos en las bases de datos",
    "il": "1.1 Distingue esquemas, instancias, atributos, claves, tuplas, relaciones y sus características como elementos del modelado de datos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Modelado de datos",
        "definition": "El proceso conceptual, lógico y físico de estructurar y organizar los datos de un dominio de negocio, definiendo las entidades de información, sus propiedades individuales y las reglas de asociación mutua para su almacenamiento consistente.",
        "example": "Mapear los requerimientos de una escuela y definir que se debe almacenar la información de los 'Estudiantes', las 'Asignaturas' y las 'Notas', estableciendo cómo se vinculan entre sí."
      },
      {
        "term": "Bases de datos relacionales",
        "definition": "Sistemas de almacenamiento basados en el modelo relacional propuesto por Codd. Organizan la información en tablas lógicas compuestas de filas y columnas, gobernadas por restricciones de integridad y manipuladas mediante lenguaje SQL.",
        "example": "Utilizar un sistema como PostgreSQL o MySQL para almacenar la base de datos de usuarios de tu aplicación de IA, asegurando que las tablas se relacionen mediante llaves."
      },
      {
        "term": "Entidad",
        "definition": "Cualquier objeto, persona, concepto o evento del mundo real que es distinguible del resto y sobre el cual una organización recopila e identifica datos específicos en su base de datos.",
        "example": "En un sistema escolar, la entidad 'Estudiante' representa a los alumnos, modelada físicamente como una tabla donde cada fila representa a un estudiante particular."
      },
      {
        "term": "Atributos",
        "definition": "Las propiedades o características individuales que describen, definen y califican a una Entidad específica dentro del modelo de datos de la base de datos.",
        "example": "Los atributos de la entidad 'Estudiante' incluyen el número de identificación (cédula), el primer nombre, el primer apellido, el correo electrónico y la fecha de nacimiento."
      },
      {
        "term": "Llaves primarias y foráneas",
        "definition": "Llave Primaria (Primary Key): atributo o conjunto de atributos que identifican de forma única y unívoca a cada registro dentro de una tabla. Llave Foránea (Foreign Key): atributo en una tabla que hace referencia directa a la Llave Primaria de otra tabla, estableciendo la relación física entre ambas.",
        "example": "En la tabla 'Estudiantes', el ID del alumno es la Llave Primaria. En la tabla 'Matricula', el ID del alumno actúa como Llave Foránea para asociar cada registro de matrícula con su estudiante correspondiente."
      },
      {
        "term": "Tuplas y relaciones",
        "definition": "Una Tupla representa a una fila o registro individual dentro de una tabla de base de datos relacional. La Relación es la estructura de la tabla en sí, o la vinculación lógica entre tablas mediante llaves.",
        "example": "Una fila en la tabla de estudiantes que contiene los datos 'Cédula: 1-1234-5678, Nombre: Ana, Edad: 17' representa una tupla particular de la relación Estudiantes."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Tipos de relaciones (1:1, 1:N, N:M)",
        "definition": "Tipos de cardinalidad entre entidades. 1:1 (Un registro se vincula a solo uno en la otra tabla); 1:N (Un registro se vincula a muchos en la otra tabla); N:M (Muchos registros se vinculan a muchos, requiere tabla intermedia).",
        "example": "Modelar la relación entre 'Estudiantes' y 'Cursos': un curso tiene muchos estudiantes matriculados (relación de uno a muchos, 1:N) representados mediante una llave foránea."
      },
      {
        "term": "Integridad referencial",
        "definition": "Regla de consistencia lógica que garantiza que las relaciones entre tablas permanezcan válidas. Asegura que una llave foránea no pueda hacer referencia a una llave primaria inexistente, y restringe el borrado de registros padres que tienen registros hijos vinculados.",
        "example": "El motor de base de datos impide borrar un registro de la tabla 'Estudiantes' si existen registros vinculados a su ID en la tabla 'Notas', evitando crear calificaciones sin dueño."
      },
      {
        "term": "Restricciones de dominio",
        "definition": "Reglas de validación que definen el conjunto de valores permitidos y válidos que puede tomar un atributo en particular (ej. tipo de dato, rango de valores, restricciones Check, UNIQUE o NOT NULL).",
        "example": "Configurar el atributo 'Edad' como un tipo de dato entero con una restricción CHECK (edad >= 0 y edad <= 120) para evitar registrar valores absurdos en la base de datos."
      },
      {
        "term": "Valores NULL y diccionarios de datos",
        "definition": "Un valor NULL representa la ausencia de datos o un valor desconocido en un atributo. El Diccionario de Datos es el documento técnico de metadatos que describe detalladamente la estructura de las tablas, tipos de datos, restricciones y propósitos de cada campo.",
        "example": "Dejar el campo 'Teléfono Secundario' con valor NULL si el alumno no cuenta con él, y documentar en el diccionario de datos que el campo 'Cédula' es de tipo VARCHAR(15) y es obligatorio (NOT NULL)."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Esquema de base de datos frente a Instancia de base de datos",
        "definition": "El Esquema es el diseño estructural de la base de datos (tablas, campos, relaciones y restricciones) definido en la etapa de modelado y que es fijo e inmutable en el tiempo. La Instancia es el conjunto de datos reales almacenados en las tablas en un momento específico del tiempo T.",
        "example": "Modificar el esquema de la base de datos agregando una nueva columna 'Fecha de Registro' mediante una sentencia ALTER TABLE, en contraste con agregar un nuevo estudiante (actualizando la instancia de datos) mediante una sentencia INSERT."
      }
    ],
    "quiz": {
      "question": "En el diseño e implementación de bases de datos relacionales para sistemas de gestión escolar, ¿cuál es la diferencia conceptual e ingenieril entre el 'Esquema de la base de datos' y una 'Instancia de la base de datos'?",
      "options": [
        "El Esquema es el lenguaje de programación con el que se programa el backend, y la Instancia es la computadora donde corre el servidor.",
        "El Esquema es la estructura lógica, el diseño de las tablas, campos y reglas de integridad que permanecen constantes en el tiempo; mientras que la Instancia representa el estado de los datos reales y registros que están guardados en las tablas en un instante de tiempo específico.",
        "La Instancia es la copia de seguridad incremental guardada en la nube, y el Esquema es el modelo físico de cableado de red.",
        "El Esquema permite duplicar llaves primarias sin restricciones, y la Instancia prohíbe el uso de llaves foráneas."
      ],
      "answer": 1,
      "explanation": "Correcto. El esquema es el plano de construcción o arquitectura (las tablas creadas, sus tipos de columnas y restricciones lógicas) y no cambia a menos que alteres la estructura de la base de datos. La instancia es la fotografía de los datos en un momento dado; cambia constantemente cada vez que agregas, modificas o eliminas filas de información."
    }
  },
  {
    "id": 24,
    "subarea": "Bases de datos",
    "nivel": "Undécimo",
    "ra": "2. Examinar los elementos, diseños y sus características utilizadas en el diseño de bases de datos.",
    "il": "2.1 Describe los elementos involucrados en el diseño de bases de datos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Diseño de bases de datos",
        "definition": "El proceso estructurado de planificar y organizar los datos para eliminar la redundancia y garantizar la integridad. Se divide en tres etapas: Diseño Conceptual (diagramas lógicos de negocio), Diseño Lógico (mapeo a tablas relacionales) y Diseño Físico (implementación en un motor SGBD específico).",
        "example": "Elaborar la arquitectura de almacenamiento de datos para un MVP SaaS, definiendo la estructura de tablas y relaciones antes de escribir la primera línea de código SQL."
      },
      {
        "term": "Diagrama Entidad-Relación (DER)",
        "definition": "Herramienta gráfica de modelado de datos conceptual que visualiza las entidades de un sistema (rectángulos), sus atributos descriptivos (óvalos) y las relaciones lógicas de cardinalidad entre ellas (rombos).",
        "example": "Dibujar un DER en Lucidchart que muestre la entidad 'Usuario' conectada mediante la relación 'Realiza' (cardinalidad 1:N) con la entidad 'Transacción'."
      },
      {
        "term": "Normalización de bases de datos (1FN, 2FN, 3FN)",
        "definition": "Técnica matemática y lógica de optimización de bases de datos relacionales que aplica un conjunto de reglas (Formas Normales) para estructurar tablas de modo que se eviten la redundancia de datos, anomalías de inserción, actualización y borrado.",
        "example": "Dividir una tabla gigante desorganizada de 'Factura' en tres tablas normalizadas: 'Clientes', 'Facturas' y 'DetalleFactura', eliminando la repetición constante del nombre del cliente en cada factura."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Entidades fuertes y débiles",
        "definition": "Entidad Fuerte: aquella que existe por sí misma y posee una clave primaria única que la identifica (ej. Estudiante). Entidad Débil: aquella cuya existencia lógica depende enteramente de otra entidad fuerte y cuya clave primaria se compone en parte de la clave de la fuerte (ej. Dependiente familiar).",
        "example": "La tabla 'Estudiante' es una entidad fuerte, mientras que la tabla 'HistorialMedico' es una entidad débil que requiere el ID del estudiante para existir e identificarse."
      },
      {
        "term": "Atributos compuestos y multivaluados",
        "definition": "Atributo Compuesto: aquel que puede subdividirse en partes más pequeñas con significado independiente (ej. Dirección en Calle, Ciudad, Código Postal). Atributo Multivaluado: aquel que puede contener múltiples valores simultáneos para una sola entidad (ej. Teléfonos).",
        "example": "En la primera forma normal (1FN), se prohíben los atributos multivaluados, por lo que una columna que contenga múltiples números telefónicos separados por comas debe descomponerse en registros individuales."
      },
      {
        "term": "Dependencias funcionales y transitivas en el proceso de normalización",
        "definition": "Dependencia Funcional: ocurre cuando el valor de un atributo Y se determina de forma única por el valor de un atributo X (X -> Y). Dependencia Transitiva: ocurre cuando una columna no clave determina el valor de otra columna no clave (A -> B y B -> C, por ende A -> C transitivamente).",
        "example": "En la segunda forma normal (2FN) se eliminan dependencias funcionales parciales sobre llaves compuestas. En la tercera forma normal (3FN) se eliminan las dependencias transitivas (ej. el código postal determina el estado, por lo que deben ir en una tabla separada)."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Enfoque del Diseño Conceptual de bases de datos",
        "definition": "La creación de un modelo abstracto de alto nivel centrado puramente en las reglas del negocio y el significado de los datos, abstrayéndose por completo de detalles técnicos o limitaciones físicas del motor de bases de datos que se elegirá posteriormente.",
        "example": "Modelar el flujo relacional de una clínica identificando las entidades Paciente y Médico sin importar si la base de datos se implementará en PostgreSQL, Oracle, o MySQL."
      },
      {
        "term": "Modelado independiente de limitaciones de hardware o software del motor SGBD",
        "definition": "La práctica de diseñar el DER y el modelo lógico relacional enfocándose en la normalidad y consistencia matemática de los datos, asegurando la portabilidad del diseño sin acoplarlo prematuramente a las capacidades de hardware o dialectos de software específicos.",
        "example": "Diseñar las llaves y restricciones del negocio en papel de forma limpia, lo que permite exportar la misma estructura relacional a cualquier base de datos SQL del mercado sin modificaciones lógicas."
      }
    ],
    "quiz": {
      "question": "En el diseño de bases de datos relacionales, ¿cuál es el propósito de aplicar la Normalización hasta la Tercera Forma Normal (3FN)?",
      "options": [
        "Aumentar el tamaño de almacenamiento en disco duplicando los registros de cada tabla.",
        "Garantizar la consistencia de los datos, eliminando la redundancia innecesaria y previniendo anomalías de actualización, inserción y borrado mediante la eliminación de atributos multivaluados (1FN), dependencias parciales (2FN) y dependencias transitivas (3FN).",
        "Configurar el switch local para que reenvíe paquetes de bases de datos con mayor prioridad usando direccionamiento IP multicast.",
        "Permitir la creación de tablas relacionales sin definir llaves primarias ni foráneas."
      ],
      "answer": 1,
      "explanation": "Correcto. La normalización (hasta 3FN) es el estándar ingenieril en bases de datos relacionales para asegurar que cada dato se guarde en un único lugar lógico. Esto evita duplicidad y previene fallos lógicos (ej. actualizar la dirección de un cliente en un registro pero olvidar actualizarla en otro). Se logra asegurando atomicidad (1FN), dependencia funcional completa sobre la llave primaria (2FN), y eliminando dependencias transitivas entre columnas no clave (3FN)."
    }
  },
  {
    "id": 25,
    "subarea": "Bases de datos",
    "nivel": "Undécimo",
    "ra": "3. Desarrollar bases de datos utilizando el lenguaje relacional SQL.",
    "il": "3.1 Reconoce, estructuras de sentencia, expresiones y funciones del lenguaje relacional SQL.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Lenguaje SQL",
        "definition": "Structured Query Language. El estándar declarativo internacional para la definición, manipulación, control y consulta de datos en bases de datos relacionales.",
        "example": "Escribir una consulta SELECT en la base de datos PostgreSQL de la empresa para extraer la lista de usuarios activos registrados en el último mes."
      },
      {
        "term": "Sentencias DDL (CREATE, ALTER, DROP) y DML (SELECT, INSERT, UPDATE, DELETE)",
        "definition": "DDL (Data Definition Language): sentencias que crean y modifican la estructura del esquema (CREATE table, ALTER column, DROP index). DML (Data Manipulation Language): sentencias que interactúan con los registros de la instancia (SELECT datos, INSERT filas, UPDATE valores, DELETE registros).",
        "example": "Utilizar DDL 'CREATE TABLE' para estructurar la tabla 'Usuarios', y luego usar DML 'INSERT INTO' para registrar un nuevo perfil de usuario en esa tabla."
      },
      {
        "term": "Funciones de agregación",
        "definition": "Funciones matemáticas integradas en SQL que procesan un conjunto de valores de una columna en múltiples filas para retornar un único valor resumido o calculado (ej. COUNT, SUM, AVG, MIN, MAX).",
        "example": "Ejecutar la consulta 'SELECT AVG(calificacion) FROM evaluaciones;' para calcular el promedio aritmético exacto de todas las notas guardadas en la tabla."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Cláusulas JOIN (INNER, LEFT, RIGHT, FULL)",
        "definition": "Operadores relacionales que permiten combinar registros de dos o más tablas basándose en un campo común (relación llave primaria-foránea). INNER: retorna registros coincidentes en ambas tablas. LEFT: retorna todos de la tabla izquierda y coincidentes de la derecha.",
        "example": "Utilizar 'INNER JOIN Estudiantes ON Notas.estudiante_id = Estudiantes.id' para listar las notas junto con los nombres de los estudiantes correspondientes."
      },
      {
        "term": "Agrupamientos con GROUP BY e filtrado con HAVING",
        "definition": "GROUP BY agrupa filas que tienen los mismos valores en columnas especificadas para aplicar funciones de agregación. HAVING actúa como un filtro restrictivo sobre los resultados agrupados y calculados, a diferencia de WHERE que filtra filas individuales antes del agrupamiento.",
        "example": "SELECT especialidad, COUNT(*) FROM medicos GROUP BY especialidad HAVING COUNT(*) > 5; (agrupa médicos por especialidad y muestra solo aquellas especialidades que tienen más de 5 médicos registrados)."
      },
      {
        "term": "Subconsultas y tipos de uniones",
        "definition": "Subconsulta: consulta SQL anidada dentro de otra consulta principal (ej. en la cláusula WHERE o FROM) para filtrar o calcular datos intermedios. Las uniones (UNION/UNION ALL) combinan los conjuntos de resultados de dos consultas compatibles en una sola salida lógica.",
        "example": "Escribir 'SELECT * FROM estudiantes WHERE edad > (SELECT AVG(edad) FROM estudiantes);' para obtener los alumnos cuya edad es mayor al promedio general."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Sintaxis de Lenguaje de Manipulación de Datos (DML) en SQL estándar",
        "definition": "Las reglas gramaticales e instrucciones SQL declarativas estandarizadas (ANSI SQL) utilizadas para insertar, consultar, actualizar y eliminar de forma consistente los registros contenidos en las bases de datos de producción.",
        "example": "Asegurar que las sentencias UPDATE utilicen cláusulas WHERE estrictas para evitar la modificación accidental de todos los registros de la tabla."
      },
      {
        "term": "Filtrado restrictivo relacional (cláusulas SELECT-FROM-WHERE con operadores relacionales)",
        "definition": "El uso de la cláusula WHERE junto con operadores de comparación (=, <>, >, LIKE, BETWEEN, IN) y operadores lógicos (AND, OR, NOT) para restringir el conjunto de registros devueltos por la base de datos, optimizando el rendimiento y el uso de memoria.",
        "example": "SELECT nombre, precio FROM productos WHERE categoria = 'Electrónica' AND stock > 0; (retorna solo los nombres y precios de productos en stock que pertenecen a la categoría especificada)."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de una aplicación web, un programador necesita realizar una consulta SQL a la base de datos para obtener el promedio de ventas mensuales por categoría de producto, pero desea mostrar únicamente aquellas categorías cuyo promedio de ventas supere los $5,000. ¿Cómo estructuraría la consulta utilizando cláusulas de agrupación y filtrado?",
      "options": [
        "SELECT categoria, AVG(ventas) FROM productos WHERE AVG(ventas) > 5000 GROUP BY categoria;",
        "SELECT categoria, AVG(ventas) FROM productos GROUP BY categoria HAVING AVG(ventas) > 5000;",
        "SELECT categoria, SUM(ventas) FROM productos INNER JOIN ventas ON productos.id = ventas.id WHERE categoria > 5000;",
        "CREATE TABLE ventas_promedio AS SELECT categoria FROM productos DROP COLUMN ventas;"
      ],
      "answer": 1,
      "explanation": "Correcto. Para filtrar datos agrupados mediante funciones de agregación (como AVG, SUM, COUNT), se debe utilizar la cláusula 'HAVING' después de 'GROUP BY'. La cláusula 'WHERE' no puede evaluar funciones de agregación directamente porque se procesa antes de que las filas sean agrupadas por el motor de la base de datos."
    }
  },
  {
    "id": 26,
    "subarea": "Bases de datos",
    "nivel": "Duodécimo",
    "ra": "4. Examinar los conceptos básicos sobre bases de datos NoSQL.",
    "il": "4.1 Diferencia entre NoSQL y sistemas de gestión de bases de datos relacionales",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Bases de datos NoSQL",
        "definition": "Sistemas de gestión de bases de datos no relacionales diseñados para almacenar y manipular datos no estructurados o semiestructurados (sin esquemas rígidos), ofreciendo alta escalabilidad horizontal y rendimiento optimizado para Big Data y aplicaciones en tiempo real.",
        "example": "Utilizar MongoDB para almacenar las conversaciones de un chatbot de IA, donde cada conversación puede tener un número variable de mensajes y metadatos anidados."
      },
      {
        "term": "Tipos (documentales, clave-valor, grafos, columnas)",
        "definition": "Categorías de NoSQL. Documentales: guardan datos en JSON/BSON (MongoDB). Clave-Valor: diccionarios ultra-rápidos en memoria (Redis). Grafos: nodos y relaciones optimizados para redes complejas (Neo4j). Columnares: familias de columnas para grandes volúmenes de consultas (Cassandra).",
        "example": "Usar Redis (clave-valor) para cachear sesiones web de usuarios con tiempos de respuesta de microsegundos, y usar Cassandra (columnar) para almacenar terabytes de logs de sensores de IoT."
      },
      {
        "term": "Comparación con bases de datos relacionales (SQL vs NoSQL)",
        "definition": "SQL: esquemas rígidos predefinidos, relaciones complejas mediante JOINs, transacciones ACID estrictas, escalabilidad principalmente vertical. NoSQL: esquemas dinámicos flexibles, datos desnormalizados (anidados), escalabilidad horizontal (Sharding), consistencia eventual (BASE).",
        "example": "El sistema transaccional de pagos del banco requiere SQL (ACID para evitar duplicidad de dinero), mientras que el feed de publicaciones de una red social prefiere NoSQL (velocidad y escalabilidad horizontal)."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Teorema de CAP (Consistencia, Disponibilidad, Tolerancia a la partición)",
        "definition": "Postulado de Eric Brewer que establece que un sistema de datos distribuido solo puede garantizar simultáneamente dos de estas tres propiedades frente a fallos de red: Consistencia (todos ven los mismos datos), Disponibilidad (cada petición recibe respuesta) o Tolerancia a Particiones (el sistema sigue funcionando a pesar de cortes de red).",
        "example": "En un clúster distribuido en la nube, si ocurre una partición de red (corte de enlace), la base de datos debe decidir si ser Consistente (bloquear escrituras hasta sincronizar) o Disponible (permitir escrituras locales con datos temporalmente desactualizados)."
      },
      {
        "term": "Modelo BASE vs ACID",
        "definition": "ACID (Atomicity, Consistency, Isolation, Durability): transacciones relacionales robustas que aseguran consistencia inmediata. BASE (Basically Available, Soft state, Eventual consistency): transacciones NoSQL flexibles que permiten consistencia a largo plazo a cambio de alta disponibilidad y velocidad.",
        "example": "Una transferencia bancaria utiliza el modelo ACID para evitar que el dinero desaparezca en el aire, mientras que el contador de 'likes' de una foto en Instagram usa BASE para acelerar la respuesta, tolerando que tarde unos segundos en sincronizarse a todos."
      },
      {
        "term": "Formato JSON/BSON e indexación en bases NoSQL",
        "definition": "Formato de representación de datos semiestructurados. JSON es de texto plano legible; BSON es la versión binaria comprimida que soporta más tipos de datos. La indexación NoSQL crea rutas de búsqueda rápidas en campos específicos de los documentos para evitar escaneos de colecciones completas.",
        "example": "En MongoDB, los registros se guardan internamente como BSON e indexan el campo 'email' de los perfiles de usuario para responder consultas de login en menos de 2 milisegundos."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Flexibilidad estructural de esquemas NoSQL para Big Data y alta tasa de transferencia",
        "definition": "La capacidad intrínseca de los motores NoSQL para ingerir, almacenar y procesar flujos masivos de datos con esquemas cambiantes o polimórficos a altas velocidades sin requerir migraciones complejas de esquemas o bloqueos de tablas.",
        "example": "Ingestar millones de eventos de telemetría de dispositivos móviles por segundo en una colección de MongoDB donde cada dispositivo envía sensores distintos sin alterar la estructura general."
      },
      {
        "term": "Arquitectura documental basada en objetos JSON estructurados",
        "definition": "Diseño de base de datos donde la unidad mínima de información es el Documento (típicamente JSON), el cual almacena de forma desnormalizada todos los datos relacionados e hijos dentro de un único objeto autodescriptivo mediante subdocumentos y arreglos.",
        "example": "Guardar un artículo de blog junto con todos sus comentarios e información del autor dentro del mismo documento JSON en lugar de dividirlo en tres tablas relacionales vinculadas."
      }
    ],
    "quiz": {
      "question": "En el diseño de sistemas de bases de datos distribuidos en la nube, ¿cuál es la implicación principal del Teorema de CAP para una base de datos NoSQL ante una partición o corte de red (Partition)?",
      "options": [
        "El sistema operativo apaga automáticamente los servidores para evitar pérdidas de energía eléctrica.",
        "El sistema debe elegir obligatoriamente entre garantizar la Consistencia inmediata (devolviendo un error si no puede sincronizar datos) o garantizar la Disponibilidad (devolviendo una respuesta rápida con datos posiblemente desactualizados), ya que es imposible garantizar ambas simultáneamente bajo una partición de red.",
        "La base de datos se transforma automáticamente de relacional a no relacional sin intervención del programador.",
        "El Teorema de CAP exige el uso de cables de red de fibra óptica blindados Cat 6a para anular colisiones lógicas."
      ],
      "answer": 1,
      "explanation": "Correcto. El Teorema de CAP demuestra matemáticamente que ante una partición de red (la P en CAP), un sistema distribuido debe elegir entre Consistencia (C) o Disponibilidad (A). Si eliges Consistencia, el sistema bloqueará las operaciones hasta que los servidores vuelvan a sincronizarse, sacrificando disponibilidad. Si eliges Disponibilidad, responderá al cliente de inmediato, pero sacrificando la consistencia temporal, ya que los nodos tendrán versiones diferentes de los datos."
    }
  },
  {
    "id": 27,
    "subarea": "Bases de datos",
    "nivel": "Duodécimo",
    "ra": "5. Examinar los conceptos básicos utilizados en el análisis y visualizaciones de datos.",
    "il": "5.1 Discrimina la visualización e infografía, visualización de datos estática y dinámicas.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Análisis de datos",
        "definition": "El proceso sistemático de limpiar, transformar, modelar y examinar datos estructurados y no estructurados con el objetivo de descubrir patrones útiles, extraer conclusiones lógicas y apoyar la toma de decisiones empresariales basadas en evidencia.",
        "example": "Analizar los datos de comportamiento de compra de los clientes para identificar qué categorías de productos se venden más juntos y optimizar el inventario."
      },
      {
        "term": "Herramientas de visualización",
        "definition": "Software y librerías de programación que convierten conjuntos de datos numéricos complejos en representaciones gráficas interactivas y visuales (ej. Power BI, Tableau, Looker Studio, o librerías como D3.js y Chart.js).",
        "example": "Utilizar Tableau para conectar la base de datos de producción y renderizar gráficos interactivos de barras y líneas para el reporte de ingresos mensuales."
      },
      {
        "term": "Infografías",
        "definition": "Representaciones visuales informativas y resumidas que combinan imágenes, gráficos estadísticos y textos breves explicativos, diseñadas para comunicar información compleja de forma rápida, clara y auto-explicativa.",
        "example": "Diseñar una infografía que ilustre el flujo de procesamiento de una petición de IA en un sistema de microservicios, facilitando su comprensión para clientes no técnicos."
      },
      {
        "term": "Dashboards",
        "definition": "Tableros de control interactivos que consolidan y muestran métricas clave (KPIs) y gráficos de rendimiento en una sola pantalla, permitiendo monitorear el estado operativo y de negocio de un sistema en tiempo real.",
        "example": "Crear un dashboard de soporte técnico que muestre en vivo el número de tickets abiertos, el tiempo promedio de respuesta y la satisfacción del cliente."
      },
      {
        "term": "Visualización de datos estática y dinámica",
        "definition": "Visualización Estática: gráficos fijos e inmutables que no cambian tras su renderizado (reportes impresos o PDFs). Visualización Dinámica: gráficos interactivos conectados a bases de datos vivas que permiten al usuario filtrar, hacer zoom (drill-down) y actualizar los datos al instante.",
        "example": "Un reporte trimestral de ventas guardado en formato PDF frente a un panel web interactivo donde el analista filtra las ventas por provincia y día de la semana."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Storytelling con datos",
        "definition": "La metodología de traducir análisis de datos complejos a una narrativa simple, atractiva y comprensible, estructurando la presentación con un inicio (contexto), conflicto (descubrimiento en los datos) y resolución (acción recomendada).",
        "example": "Presentar un informe de rendimiento mostrando que el Churn rate subió debido a un bug de login en iOS, logrando que el equipo directivo apruebe contratar más programadores de Swift."
      },
      {
        "term": "Selección de tipos de gráficos según la variable (dispersión, cajas, líneas)",
        "definition": "La práctica de elegir la representación gráfica adecuadamente para cada tipo de dato. Gráficos de Línea: ideales para series de tiempo. Gráficos de Dispersión (Scatter Plot): adecuados para buscar correlaciones entre dos variables continuas. Diagramas de Caja (Box Plot): idóneos para visualizar distribuciones estadísticas, medianas y valores atípicos (outliers).",
        "example": "Usar un gráfico de dispersión para analizar si a mayor temperatura del servidor de GPU (variable X) hay una menor tasa de procesamiento de tokens de IA (variable Y)."
      },
      {
        "term": "Librerías de visualización (Matplotlib, Seaborn) y preparación de datos (Data Cleaning)",
        "definition": "El ecosistema de Python para análisis de datos. Matplotlib y Seaborn permiten graficar datos estructurados en dataframes. La preparación de datos (Data Cleaning) consiste en tratar valores nulos, corregir duplicados y formatear tipos de datos antes de visualizarlos.",
        "example": "Usar pandas para rellenar valores faltantes con la media en la columna 'edad' y luego graficar la distribución de edades de los clientes usando un histograma en Seaborn."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Clasificación analítica: Visualizaciones Estáticas frente a Visualizaciones Dinámicas",
        "definition": "La distinción operativa en Business Intelligence entre reportes planos cerrados (infografías y PDFs fijos) que capturan un estado histórico inmutable, y tableros interactivos dinámicos que se conectan mediante APIs a la base de datos para ofrecer actualizaciones continuas y filtrados ad-hoc.",
        "example": "El cliente recibe un reporte PDF semanal automatizado pero también tiene acceso a un portal web con gráficos de rendimiento interactivos conectados a su base de datos."
      }
    ],
    "quiz": {
      "question": "En el área de Analítica y Business Intelligence (BI), un científico de datos necesita presentar el estado financiero de una empresa a la junta directiva y requiere que los ejecutivos puedan filtrar interactivamente las ganancias por año, mes y país. ¿Qué tipo de visualización técnica debe implementar y por qué?",
      "options": [
        "Debe crear una infografía estática guardada en formato de imagen PNG fija para evitar que los datos se muevan físicamente.",
        "Debe diseñar e implementar un Dashboard interactivo (Visualización Dinámica) conectado a la base de datos, permitiendo realizar consultas ad-hoc y filtrados lógicos en tiempo real según los requerimientos del usuario.",
        "Debe programar un script en bash que imprima los datos crudos en formato hexadecimal por consola.",
        "Debe diseñar una presentación impresa en papel térmico de fax para asegurar la persistencia física del reporte."
      ],
      "answer": 1,
      "explanation": "Correcto. La visualización dinámica a través de Dashboards interactivos es ideal para escenarios donde el usuario final requiere explorar los datos de forma autónoma. Al estar conectado a las fuentes de datos, permite realizar consultas personalizadas al instante (filtrando por país o mes) a diferencia de las visualizaciones estáticas (PDFs o imágenes fijas) que solo muestran una foto histórica fija del negocio."
    }
  },
  {
    "id": 28,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "1. Aplicar algoritmos, matrices y álgebra de matrices en la resolución de problemas.",
    "il": "1.1 Resuelve problemas utilizando algoritmos, matrices y álgebra de matrices.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Lógica algorítmica",
        "definition": "La capacidad lógica y estructurada para descomponer un problema complejo en una secuencia ordenada y finita de instrucciones lógicas y pasos matemáticos precisos que conducen siempre a una solución correcta y predecible.",
        "example": "Desarrollar el algoritmo para ordenar una lista de notas escolares de menor a mayor de forma eficiente utilizando el método Quicksort."
      },
      {
        "term": "Arreglos bidimensionales (matrices)",
        "definition": "Estructuras de datos homogéneas que organizan los elementos en una cuadrícula lógica bidimensional compuesta por filas y columnas, donde cada elemento se direcciona de forma precisa utilizando dos índices: [fila][columna].",
        "example": "Representar un tablero de ajedrez en el código utilizando una matriz de 8x8, donde el elemento en tablero[0][0] representa la torre de la esquina superior izquierda."
      },
      {
        "term": "Operaciones matemáticas con matrices aplicadas a programación",
        "definition": "La traslación de operaciones matemáticas lineales a estructuras de datos en programación, tales como sumas de matrices, transposición (intercambio de filas por columnas) y productos matriciales ejecutados mediante algoritmos de ciclos anidados.",
        "example": "Sumar dos matrices de tamaño 3x3 recorriéndolas con dos bucles for anidados y guardando la suma de cada celda coincidente en una tercera matriz de resultados."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Indexación basada en cero",
        "definition": "La convención de diseño en la gran mayoría de lenguajes de programación donde el primer elemento de un arreglo o matriz se ubica en el índice 0, no en el 1. Por ende, para una longitud L, los índices válidos van de 0 a L-1.",
        "example": "En un arreglo de 5 elementos, acceder al primer elemento con arr[0] y al último elemento utilizando la posición arr[4]."
      },
      {
        "term": "Operaciones de transposición de matrices",
        "definition": "Operación matricial lineal donde las filas de una matriz original A se convierten en las columnas de una nueva matriz transpuesta A^T. Es decir, el elemento en la posición [i][j] pasa a la posición [j][i].",
        "example": "Convertir una matriz de tamaño 2x3 en una matriz transpuesta de tamaño 3x2, facilitando cálculos en algoritmos de procesamiento de imágenes."
      },
      {
        "term": "Multiplicación matricial punto a punto y producto punto (dot product)",
        "definition": "Multiplicación punto a punto (Hadamard) multiplica cada elemento por su contraparte en la misma posición. Producto punto (Dot Product) multiplica las filas de la primera matriz por las columnas de la segunda y suma los resultados, fundamental para transformaciones 3D y redes neuronales.",
        "example": "Multiplicar dos matrices de pesos de una red neuronal utilizando el producto punto (dot product) para calcular la suma ponderada de las neuronas de entrada."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Operaciones de adición lineal e interpolación matricial sobre tensores y estructuras numéricas",
        "definition": "La base matemática de la computación científica y de la IA. Consiste en manipular tensores (matrices multidimensionales) mediante sumas lineales, multiplicaciones y operaciones de escala necesarias para transformar conjuntos de datos matemáticos y coordinar píxeles en pantalla.",
        "example": "Modificar el brillo de una imagen digital de 1920x1080 sumando un valor constante a cada celda de la matriz tridimensional RGB que representa la imagen."
      }
    ],
    "quiz": {
      "question": "En la programación científica y desarrollo de Inteligencia Artificial, si tienes una matriz de datos original A de dimensiones 3x2 (3 filas y 2 columnas) y ejecutas un algoritmo de transposición de matrices, ¿cuáles serán las dimensiones finales de la matriz resultante transpuesta A^T y qué sucederá lógicamente con sus índices?",
      "options": [
        "Las dimensiones seguirán siendo 3x2 y todos los valores internos se inicializarán en cero.",
        "Las dimensiones finales serán de 2x3 (2 filas y 3 columnas), y el elemento original ubicado en la posición A[i][j] pasará a estar lógicamente en la posición A^T[j][i].",
        "La matriz se convertirá en un arreglo unidimensional de 5 elementos indexado en base 1.",
        "La transposición destruye la matriz original debido a que no es una operación linealmente enrutable."
      ],
      "answer": 1,
      "explanation": "Correcto. La transposición de una matriz intercambia sus filas por sus columnas. Por lo tanto, una matriz de dimensiones M x N se convierte en una matriz de dimensiones N x M. Matemáticamente, el elemento que estaba en la posición A[i][j] (fila i, columna j) se reubica exactamente en la posición A^T[j][i] (fila j, columna i) de la matriz transpuesta."
    }
  },
  {
    "id": 29,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "2. Aplicar algoritmos y diagramas de flujo estructurado como herramientas para resolución lógica de problemas computacionales.",
    "il": "2.1 Resuelve problemas utilizando las técnicas de los algoritmos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Algoritmos estructurados",
        "definition": "Metodología de diseño de algoritmos que utiliza únicamente tres estructuras lógicas de control: Secuencia (ejecución paso a paso), Selección (bifurcaciones condicionales if/else) y Repetición (ciclos for/while), facilitando la lectura y depuración.",
        "example": "Escribir el flujo de control para validar el acceso de un usuario evaluando la contraseña (selección) y permitiendo hasta 3 intentos antes de bloquearlo (repetición)."
      },
      {
        "term": "Diagramas de flujo",
        "definition": "Representación gráfica de un algoritmo que utiliza símbolos geométricos estandarizados (óvalos, rectángulos, rombos) conectados por flechas direccionales para ilustrar la secuencia de pasos lógicos del programa.",
        "example": "Dibujar un rombo en el diagrama para representar el punto de decisión donde el programa verifica si el usuario es mayor de edad o no."
      },
      {
        "term": "Pseudocódigo",
        "definition": "La descripción informal de alto nivel de un algoritmo computacional que utiliza una mezcla de lenguaje natural estructurado con convenciones de programación, sirviendo para planificar la lógica antes de traducirla a un lenguaje específico.",
        "example": "Escribir 'SI edad >= 18 ENTONCES Mostrar \"Acceso permitido\" SINO Mostrar \"Acceso denegado\" FINSI' para planificar la lógica de validación de un formulario."
      },
      {
        "term": "Fases de resolución de problemas computacionales",
        "definition": "El ciclo formal de ingeniería de software para resolver un problema: 1. Análisis del problema (entender qué se requiere), 2. Diseño del algoritmo (crear el plano lógico usando pseudocódigo o diagramas), 3. Codificación (escribir el programa en un lenguaje) y 4. Depuración y Pruebas (corregir errores).",
        "example": "Identificar en la fase de análisis que el sistema escolar requiere calcular promedios, diseñar la fórmula en pseudocódigo, codificarla en JavaScript y probarla con notas reales para corregir bugs."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Simbología estándar ANSI para diagramas de flujo",
        "definition": "Conjunto de figuras geométricas estandarizadas por la ANSI. Óvalo: inicio o fin del programa. Rectángulo: operaciones de proceso o asignación. Rombo: toma de decisiones condicionales. Romboide: entrada y salida de datos generales.",
        "example": "Utilizar un rectángulo en el diagrama para representar la operación matemática 'promedio = suma / total' y un romboide para representar la lectura del teclado."
      },
      {
        "term": "Trazas de algoritmos (prueba de escritorio) y manejo de la modularidad inicial",
        "definition": "La Prueba de Escritorio (traza) es el método manual de seguir paso a paso la ejecución de un algoritmo en una tabla anotando los cambios de valor de las variables para verificar la lógica. La modularidad divide el algoritmo en funciones independientes.",
        "example": "Crear una tabla con columnas 'Iteración', 'i', 'suma' y validar en papel que al finalizar un ciclo para sumar números del 1 al 5, la variable 'suma' valga exactamente 15."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Fases fundamentales de la resolución lógica de problemas algorítmicos",
        "definition": "El flujo de datos lógico que gobierna cualquier algoritmo estructurado: 1. Entrada de datos de origen (lectura de parámetros), 2. Proceso secuencial transformador (cálculos lógicos y matemáticos) y 3. Salida de resultados (despliegue del resultado útil al usuario).",
        "example": "Un convertidor de monedas toma los dólares ingresados (Entrada), realiza la multiplicación por la tasa de cambio (Proceso) y muestra el valor en colones en pantalla (Salida)."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de software y resolución de problemas computacionales, ¿en qué consiste realizar una 'Prueba de Escritorio' (traza de algoritmo) y cuál es su utilidad práctica?",
      "options": [
        "Es un software antivirus que limpia la memoria de la computadora antes de compilar el código.",
        "Es el seguimiento manual paso a paso de la lógica de un algoritmo anotando en una tabla el valor de las variables tras cada instrucción, sirviendo para verificar el correcto funcionamiento y detectar errores lógicos (bugs) antes de escribir el código en un lenguaje.",
        "Consiste en colocar la computadora en una mesa firme para evitar que los componentes de hardware vibren.",
        "Es una fase de diseño donde se dibujan diagramas ANSI utilizando herramientas de modelado de bases de datos relacionales."
      ],
      "answer": 1,
      "explanation": "Correcto. La prueba de escritorio es una técnica fundamental en algoritmia. Consiste en simular manualmente el comportamiento del programa actuando como el procesador de la computadora. Anotando el estado de cada variable en una tabla a medida que se ejecutan las líneas de pseudocódigo o bloques del diagrama, se puede validar si el algoritmo funciona como se espera o si contiene fallos lógicos en bucles o condicionales."
    }
  },
  {
    "id": 30,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "3. Aplicar técnicas de diagramación en la resolución de problemas, utilizando ciclos y estructuras condicionales.",
    "il": "3.1 Resuelve problemas utilizando ciclos y estructuras condicionales.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Estructuras de control",
        "definition": "Mecanismos de la programación estructurada que alteran el flujo de ejecución secuencial de un programa, permitiendo tomar decisiones y repetir bloques de código en función de condiciones lógicas evaluadas en tiempo de ejecución.",
        "example": "Implementar en un sistema de facturación la estructura de control adecuada para aplicar automáticamente un descuento del 10% cuando el total de la compra supera los $500."
      },
      {
        "term": "Condicionales (if, else, switch)",
        "definition": "Estructuras de selección que bifurcan la ejecución del programa. 'if/else' evalúa una condición booleana para ejecutar uno de dos bloques. 'switch' evalúa una variable contra múltiples casos constantes de forma eficiente.",
        "example": "Usar switch en lugar de múltiples if-else para clasificar el nivel de acceso de un usuario en un sistema de gestión escolar según su rol: administrador, docente o estudiante."
      },
      {
        "term": "Ciclos recurrentes (for, while, do-while)",
        "definition": "Estructuras de repetición. 'for': ideal para un número conocido de iteraciones con un contador. 'while': repite mientras una condición es verdadera, verificando antes de ejecutar. 'do-while': garantiza al menos una ejecución verificando la condición al final.",
        "example": "Usar un ciclo 'for' para recorrer los 30 registros de calificaciones de un grupo y calcular el promedio acumulado."
      },
      {
        "term": "Anidamiento de estructuras",
        "definition": "La técnica de colocar una estructura de control (condicional o ciclo) dentro de otra, permitiendo resolver problemas de múltiples dimensiones o niveles de complejidad con lógica jerarquizada.",
        "example": "Usar dos ciclos 'for' anidados para recorrer una matriz de notas de 30 alumnos con 5 materias cada uno, calculando el promedio individual y global."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Contadores y acumuladores",
        "definition": "Variables especiales de control de bucles. Un Contador incrementa o decrementa su valor en una cantidad fija por iteración (ej. i++). Un Acumulador suma o acumula los valores procesados en cada iteración de un ciclo.",
        "example": "Declarar la variable 'totalVentas = 0' como acumulador antes del bucle, y dentro de cada iteración sumar el valor de la venta individual con 'totalVentas += venta[i]'."
      },
      {
        "term": "Condiciones lógicas complejas",
        "definition": "Expresiones booleanas que combinan múltiples condiciones simples utilizando operadores lógicos AND (&&), OR (||) y NOT (!), para crear reglas de evaluación compuestas y precisas.",
        "example": "Validar que un usuario tenga acceso al panel de administración verificando: 'if (estaAutenticado && rolUsuario === \"admin\" && !cuentaBloqueada)'."
      },
      {
        "term": "Control de bucles infinitos y uso de sentencias de ruptura (break, continue)",
        "definition": "'break' termina inmediatamente la ejecución del ciclo más cercano y transfiere el control a la instrucción posterior al bucle. 'continue' omite el resto de la iteración actual y salta a la siguiente sin salir del ciclo.",
        "example": "Usar 'break' en un ciclo de búsqueda lineal para detener la iteración en el momento exacto en que se encuentra el elemento buscado, evitando comparaciones innecesarias."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Sintaxis de control de flujo, condicionales anidados y bucles con ruptura",
        "definition": "La correcta escritura de estructuras de control anidadas que incorporan condiciones compuestas y sentencias de control de bucle, garantizando la legibilidad, el principio de mínimo privilegio lógico y la eficiencia algorítmica del código.",
        "example": "Escribir un algoritmo que busque el primer número primo mayor a 100 usando un 'while True' con un 'break' al encontrarlo, y 'continue' para saltar los pares."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de un sistema de autenticación de usuarios, necesitas crear un bucle que solicite la contraseña al usuario, permita un máximo de 3 intentos fallidos y detenga completamente el ciclo en cuanto el usuario ingrese la contraseña correcta. ¿Qué estructura de control y qué sentencia de ruptura debes combinar para implementar esta lógica de forma eficiente?",
      "options": [
        "Usar únicamente un ciclo 'do-while' sin ninguna sentencia de ruptura adicional.",
        "Usar un ciclo 'for' con un contador de intentos (for i in range(3)) combinado con una sentencia 'break' que se ejecute cuando la contraseña ingresada sea correcta, antes de agotar los 3 intentos.",
        "Usar únicamente condicionales 'if-else' sin ningún ciclo de repetición.",
        "Combinar un 'switch' con una función recursiva para delegar la validación al sistema operativo."
      ],
      "answer": 1,
      "explanation": "Correcto. La combinación de un ciclo 'for' con contador (que limita el número de intentos) más una sentencia 'break' (que interrumpe el ciclo cuando la contraseña es correcta) es la solución idiomática y eficiente. El ciclo controla el máximo de intentos y el 'break' permite salir de forma limpia sin necesidad de un flag auxiliar adicional."
    }
  },
  {
    "id": 31,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "4. Examinar los principios y usos de la automatización robotizada empleada en procesos de producción y bienestar social.",
    "il": "4.1 Reconoce conceptos básicos de la automatización robotizada.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Automatización de procesos",
        "definition": "La aplicación de tecnología para ejecutar tareas repetitivas, predecibles y de alto volumen de forma autónoma sin intervención humana continua, eliminando errores manuales, reduciendo tiempos de ciclo y liberando capacidad cognitiva humana para trabajo estratégico.",
        "example": "Automatizar la generación y el envío mensual de facturas en PDF a todos los clientes de la empresa desde el sistema ERP, disparándose de forma automática al cierre de cada mes."
      },
      {
        "term": "Robótica Industrial",
        "definition": "El diseño, construcción y programación de sistemas mecatrónicos autónomos o semiautónomos (robots) para ejecutar con alta precisión, velocidad y consistencia tareas físicas en entornos industriales de fabricación, ensamblaje o logística.",
        "example": "Implementar brazos robóticos articulados en una línea de ensamblaje automotriz para soldar con exactitud micrométrica sin fatiga ni variación entre cada ciclo de producción."
      },
      {
        "term": "RPA (Automatización Robotizada de Procesos)",
        "definition": "Tecnología de software que emula e imita la interacción humana con interfaces gráficas de usuario (clicks, formularios, copiar-pegar, envío de correos) para automatizar flujos de trabajo digitales repetitivos entre múltiples aplicaciones de software sin modificar su código fuente.",
        "example": "Implementar un bot de RPA con UiPath que automáticamente extrae datos de facturas PDF de proveedores, los valida contra el ERP y los registra en la base de datos contable sin intervención del operador."
      },
      {
        "term": "Aplicaciones sociales",
        "definition": "El impacto colectivo de la automatización en el tejido social y económico: transformación de perfiles laborales, aparición de nuevas profesiones técnicas, necesidad de recapacitación (reskilling) de la fuerza laboral y dilemas éticos sobre desplazamiento laboral.",
        "example": "Analizar cómo la automatización de procesos de revisión de documentos legales mediante IA está transformando el rol de asistentes paralegal hacia funciones de supervisión y validación de alta calidad."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Arquitectura de un robot",
        "definition": "Los sistemas integrados que componen un robot funcional: actuadores (motores eléctricos, pistones neumáticos que producen movimiento físico), sensores (encoders, cámaras, LIDAR que perciben el entorno), controlador central (procesador o microcontrolador que ejecuta la lógica) y la fuente de energía.",
        "example": "Un robot de almacén que usa sensores LIDAR para mapear el entorno, un algoritmo de pathfinding para planificar rutas y motores DC controlados por PWM para desplazarse con precisión."
      },
      {
        "term": "Lazo abierto vs lazo cerrado",
        "definition": "Lazo Abierto: el sistema ejecuta la acción sin verificar ni retroalimentar el resultado real. Lazo Cerrado: el sistema mide continuamente el resultado real mediante sensores y corrige el error de forma activa (PID Controller) hasta alcanzar el objetivo deseado.",
        "example": "Un horno industrial de lazo cerrado que mide constantemente la temperatura real con un termopar y ajusta la potencia del quemador para mantenerla exactamente en los 200°C requeridos."
      },
      {
        "term": "Flujos de trabajo automatizados y software de orquestación en RPA",
        "definition": "Plataformas de orquestación que coordinan, programan y monitorizan la ejecución de múltiples bots RPA en paralelo sobre infraestructuras empresariales, gestionando colas de trabajo, manejo de excepciones y reportes de rendimiento.",
        "example": "Usar UiPath Orchestrator para coordinar 10 bots de RPA que procesan simultáneamente las solicitudes de clientes en diferentes sistemas bancarios, gestionando la distribución de carga y el reintento ante fallos."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Arquitectura RPA: automatización e imitación de la interacción humana en interfaces digitales",
        "definition": "La capacidad del software RPA para interactuar con aplicaciones legadas y sistemas digitales a través de la capa de interfaz de usuario, sin necesidad de APIs ni modificación del sistema original. Utiliza técnicas de reconocimiento de pantalla, selección de elementos UI y orquestación de acciones para replicar el flujo de trabajo humano.",
        "example": "Un bot de RPA que abre el sistema de gestión de Recursos Humanos legado de los años 90, navega los menús, extrae los datos de ausencias y los consolida en un reporte de Excel de forma idéntica a como lo haría un empleado."
      }
    ],
    "quiz": {
      "question": "En el contexto de la automatización empresarial, ¿cuál es la diferencia fundamental entre la Robótica Industrial y la RPA (Automatización Robotizada de Procesos)?",
      "options": [
        "La Robótica Industrial utiliza lenguaje Python y la RPA utiliza lenguaje C++.",
        "La Robótica Industrial automatiza tareas físicas en el mundo real utilizando maquinaria mecatrónica (robots físicos con actuadores y sensores); la RPA automatiza flujos de trabajo digitales imitando interacciones humanas en software e interfaces de usuario, sin requerir hardware especializado.",
        "La RPA requiere reemplazar todo el software existente de la empresa, mientras que la Robótica Industrial solo modifica el cableado eléctrico.",
        "Ambas son tecnologías idénticas que solo difieren en el color de la interfaz de usuario."
      ],
      "answer": 1,
      "explanation": "Correcto. La distinción es la dimensión de operación. La Robótica Industrial opera en el mundo físico y tangible mediante máquinas mecatrónicas con actuadores, sensores y controladores para manipular objetos físicos. La RPA opera en el mundo digital e intangible, simulando ser un usuario humano que navega software, completa formularios y mueve datos entre aplicaciones sin necesidad de robots físicos ni modificar el código fuente."
    }
  },
  {
    "id": 32,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "5. Evaluar el uso máquinas simples y compuestas en la resolución de retos específicos.",
    "il": "5.1 Resuelve retos de construcción aplicando máquinas simples y compuestas.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Mecanismos básicos",
        "definition": "Componentes fundamentales de la mecánica clásica que transmiten, transforman o modifican fuerzas, movimientos y energía mecánica de forma predecible y controlada en sistemas físicos y robóticos.",
        "example": "El sistema de dirección de un robot diferencial que usa mecanismos básicos para convertir el par motor de los motores en movimiento lineal y rotacional coordinado."
      },
      {
        "term": "Máquinas simples (palancas, poleas, engranajes)",
        "definition": "Los seis elementos mecánicos fundamentales que modifican la magnitud o dirección de una fuerza aplicada. Las Palancas amplifican fuerzas mediante un punto de apoyo (fulcro). Las Poleas redirigen y amplifican fuerzas mediante cuerdas. Los Engranajes transmiten par y modulan velocidad angular.",
        "example": "Diseñar el brazo de un robot manipulador usando el principio de palanca de primer grado para amplificar la fuerza del actuador y levantar cargas pesadas con un motor pequeño."
      },
      {
        "term": "Máquinas compuestas aplicadas a la robótica",
        "definition": "La combinación estratégica de múltiples máquinas simples en un sistema mecánico integrado que logra funciones complejas (ej. trasladar cargas pesadas, realizar movimientos articulados precisos) que ninguna máquina simple podría conseguir individualmente.",
        "example": "Un brazo robótico de 6 grados de libertad (6-DOF) que combina múltiples articulaciones de engranajes, poleas de reducción y palancas para simular la movilidad y precisión del brazo humano."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Ventaja mecánica",
        "definition": "La relación matemática (adimensional) entre la fuerza de salida producida por una máquina y la fuerza de entrada aplicada. Una ventaja mecánica mayor que 1 indica que la máquina amplifica la fuerza, a costa de reducir la velocidad o distancia de desplazamiento.",
        "example": "Una polea compuesta con ventaja mecánica de 4 permite levantar una carga de 200 N aplicando únicamente 50 N de fuerza, a cambio de jalar el cabo 4 veces la distancia que sube la carga."
      },
      {
        "term": "Cálculo de relaciones de transmisión de engranajes",
        "definition": "La razón de velocidades angulares entre dos engranajes acoplados, determinada por la relación inversa de sus números de dientes. Si el engranaje motriz (driver) tiene más dientes que el conducido (follower), la velocidad aumenta y el par disminuye.",
        "example": "Un engranaje motriz de 40 dientes acoplado a uno conducido de 10 dientes produce una relación de transmisión de 4:1, cuadruplicando la velocidad angular del eje de salida del motor."
      },
      {
        "term": "Par motor (torque) y fricción",
        "definition": "El par motor (torque) es la fuerza rotacional que produce o resiste la rotación de un eje, medida en Newton-metro (N·m). La fricción es la fuerza opuesta al movimiento entre superficies en contacto que consume energía mecánica útil como calor.",
        "example": "Seleccionar un motor paso a paso (stepper motor) de mayor torque para el eje base de un brazo robótico que soporta todo el peso del sistema y requiere mayor par para resistir la gravedad."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Mecánica clásica industrial: sistemas de poleas fijas y móviles, ventaja mecánica y redirección de fuerzas",
        "definition": "Poleas Fijas: solo redirigen la dirección de la fuerza sin amplificarla (ventaja mecánica = 1). Poleas Móviles: amplifican la fuerza reduciendo a la mitad la fuerza necesaria (ventaja mecánica = 2) por cada polea móvil añadida. Los sistemas compuestos combinan ambas.",
        "example": "Diseñar un sistema de poleas compuesto para el mecanismo de elevación de un robot de almacén, calculando la cantidad de poleas móviles necesarias para levantar una carga de 500 N con solo 125 N de fuerza."
      }
    ],
    "quiz": {
      "question": "En el diseño de sistemas robóticos industriales, si un motor eléctrico tiene un engranaje motriz de 80 dientes acoplado a un engranaje conducido de 20 dientes, ¿cuál es la relación de transmisión y cuál es el efecto físico sobre la velocidad y el torque en el eje de salida?",
      "options": [
        "La relación es 0.25:1, el eje de salida girarás más lento y tendrá menor torque.",
        "La relación de transmisión es 4:1, el eje de salida girará 4 veces más rápido que el eje de entrada del motor pero producirá 4 veces menos torque.",
        "La relación es 100:1, ambos engranajes giran a la misma velocidad pero en sentido opuesto.",
        "La relación de transmisión es 1:1, y el torque y la velocidad permanecen completamente inalterados."
      ],
      "answer": 1,
      "explanation": "Correcto. La relación de transmisión entre engranajes se calcula como (dientes del engranaje motriz / dientes del engranaje conducido) = 80/20 = 4:1. Esto significa que el eje de salida girará 4 veces más rápido que el de entrada. Sin embargo, por la ley de conservación de energía, al aumentar la velocidad angular, el par motor disponible en el eje de salida se reduce proporcionalmente en un factor de 4."
    }
  },
  {
    "id": 33,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "6. Analizar el uso de los motores y simuladores por medio de retos específicos.",
    "il": "6.1 Resuelve retos utilizando motores y simuladores en situaciones específicas.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Actuadores y motores",
        "definition": "Los dispositivos electromecánicos que convierten energía eléctrica en movimiento mecánico físico (lineal o rotacional) en sistemas robóticos. Son los músculos del robot, cuya selección depende del torque requerido, la velocidad, la precisión posicional y el consumo energético.",
        "example": "Seleccionar un motor paso a paso (stepper motor) de 200 pasos por revolución para el eje Z de una impresora 3D, garantizando posicionamiento preciso sin necesidad de encoders externos."
      },
      {
        "term": "Servomotores",
        "definition": "Actuadores electromecánicos de lazo cerrado que integran un motor DC, una caja reductora de engranajes y un encoder de posición angular en un mismo conjunto compacto. Reciben una señal de control PWM que determina el ángulo exacto de posicionamiento del eje.",
        "example": "Controlar el ángulo de giro de la muñeca de un brazo robótico con un servomotor MG996R enviándole señales PWM de 1ms a 2ms de ancho de pulso, lo que lo posiciona entre 0° y 180° con precisión de ±1°."
      },
      {
        "term": "Motores DC",
        "definition": "Motores de corriente continua cuya velocidad de rotación es directamente proporcional al voltaje de alimentación aplicado y el sentido de giro depende de la polaridad. Requieren controladores externos (puentes H) para inversión de giro y señales PWM para control de velocidad.",
        "example": "Controlar la velocidad de las ruedas de un robot móvil diferencial ajustando el ciclo de trabajo (duty cycle) de la señal PWM aplicada al motor DC entre 0% y 100%."
      },
      {
        "term": "Simuladores de entornos robóticos y físicos",
        "definition": "Software de simulación física que modela y reproduce el comportamiento de robots en entornos virtuales 3D con física realista (gravedad, colisiones, fricción, inercia) antes de implementarlos en el hardware real, reduciendo riesgos y costos de desarrollo.",
        "example": "Validar el algoritmo de control PID de un robot hexápodo en el simulador Gazebo durante 200 horas virtuales antes de flashear el firmware en el hardware real, evitando dañar los servomotores."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Modulación por ancho de pulsos (PWM)",
        "definition": "Técnica digital de control analógico que varía el porcentaje de tiempo (duty cycle) durante el que una señal digital permanece en estado alto (HIGH) dentro de un período fijo. Un duty cycle del 50% es equivalente a aplicar el 50% del voltaje máximo al actuador.",
        "example": "Enviar una señal PWM al motor DC del ventilador del servidor a un 75% de duty cycle para operar al 75% de la velocidad máxima, disipando el calor del procesador sin ruido innecesario."
      },
      {
        "term": "Puentes H para inversión de giro",
        "definition": "Circuito electrónico de 4 transistores o MOSFETs dispuestos en forma de 'H' que permite invertir la polaridad aplicada a las terminales de un motor DC para controlar el sentido de rotación del eje (horario o antihorario) desde un microcontrolador de baja potencia.",
        "example": "Usar el integrado L298N (puente H dual) para controlar dos motores DC de las ruedas de un robot rover, permitiendo avanzar, retroceder y girar sobre su propio eje."
      },
      {
        "term": "Sensores de retroalimentación (encoders) y entornos virtuales de simulación",
        "definition": "Los encoders (incrementales o absolutos) son sensores que miden la posición angular o velocidad de un eje rotativo generando pulsos eléctricos contables. Son fundamentales para el control de lazo cerrado. Los simuladores (Webots, Gazebo, CoppeliaSim) replican la física del entorno.",
        "example": "Usar un encoder óptico incremental en el eje del motor del robot para contar los pulsos y calcular con precisión la distancia recorrida mediante odometría."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Conversión de energía electromagnética en motores eléctricos",
        "definition": "El principio físico fundamental detrás de los motores eléctricos: la ley de Faraday establece que una corriente eléctrica fluyendo por un bobinado de cobre dentro de un campo magnético permanente genera una fuerza mecánica (Fuerza de Lorentz) que produce el torque rotacional en el eje.",
        "example": "Al aplicar 12V DC a las bobinas de un motor, el campo magnético del imán permanente interactúa con el campo electromagnético del bobinado, generando un par de fuerzas que hacen girar el eje del rotor."
      }
    ],
    "quiz": {
      "question": "En el diseño del sistema de control de un brazo robótico, ¿cuál es la diferencia técnica principal entre usar un Motor DC con encoder externo versus un Servomotor comercial, en términos de arquitectura de control y retroalimentación posicional?",
      "options": [
        "Los servomotores solo funcionan con corriente alterna (AC), mientras que los motores DC requieren corriente continua (DC).",
        "Un motor DC con encoder externo requiere diseñar externamente toda la electrónica de control de lazo cerrado (controlador PID, driver, lectura del encoder). Un servomotor integra internamente el motor, la caja reductora, el encoder y la electrónica de control, simplificando la implementación mediante una única señal PWM.",
        "Los motores DC tienen mayor torque que los servomotores en todos los escenarios posibles de operación robótica.",
        "Los servomotores solo pueden girar 90 grados en un sentido y son incapaces de realizar rotaciones continuas de 360 grados."
      ],
      "answer": 1,
      "explanation": "Correcto. La distinción clave es la integración del sistema de control. El servomotor es un sistema completo de lazo cerrado en un solo paquete: incluye el motor DC, la caja reductora para aumentar el torque, un potenciómetro o encoder para medir la posición y la electrónica de control. Solo necesitas enviarle una señal PWM. El motor DC sin esta integración requiere que el diseñador construya todo ese sistema de control extternamente."
    }
  },
  {
    "id": 34,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "7. Distinguir conceptos básicos relacionados con la programación estructurada utilizando un lenguaje específico.",
    "il": "7.1 Diferencia lenguajes utilizados en la programación.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Lenguajes de programación",
        "definition": "Sistemas formales y estructurados de notación que permiten a los programadores expresar algoritmos e instrucciones de forma precisa y no ambigua para ser ejecutadas por un procesador. Se clasifican por nivel de abstracción (bajo nivel, alto nivel), paradigma y mecanismo de traducción.",
        "example": "Python es un lenguaje de alto nivel que sacrifica velocidad de ejecución por legibilidad y productividad, mientras que C es un lenguaje de bajo nivel que opera cerca del hardware para máxima eficiencia."
      },
      {
        "term": "Tipado",
        "definition": "El sistema que gobierna cómo un lenguaje de programación maneja y verifica los tipos de datos de las variables. El tipado Estático (Java, C++, TypeScript) verifica los tipos en tiempo de compilación. El tipado Dinámico (Python, JavaScript) los verifica en tiempo de ejecución.",
        "example": "En TypeScript (tipado estático), declarar 'let edad: number = 25' y asignarle un string produce un error en compilación. En Python (tipado dinámico), el mismo error solo se detecta cuando el código se ejecuta."
      },
      {
        "term": "Compilados vs interpretados",
        "definition": "Lenguajes Compilados (C, C++, Go, Rust): el código fuente completo se traduce a código máquina nativo en una sola pasada antes de la ejecución, logrando máxima velocidad. Lenguajes Interpretados (Python, JavaScript): un intérprete traduce y ejecuta el código línea por línea en tiempo real.",
        "example": "Un programa en C++ compilado en un servidor se ejecuta 10 veces más rápido procesando datos de ML que el mismo algoritmo en Python, pero requirió mayor tiempo de desarrollo."
      },
      {
        "term": "Sintaxis estructurada básica",
        "definition": "Las reglas gramaticales y léxicas estrictas que determinan cómo se escriben correctamente las instrucciones en un lenguaje de programación. Un error de sintaxis (SyntaxError) impide completamente la compilación o ejecución del programa.",
        "example": "Olvidar el punto y coma al final de una sentencia en C++ o confundir la indentación en Python son errores de sintaxis que el compilador o intérprete detecta y reporta antes de ejecutar el programa."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Tipado estático vs dinámico",
        "definition": "Tipado Estático: los tipos de variables se declaran explícitamente y se verifican en tiempo de compilación, detectando errores tempranamente antes del despliegue. Tipado Dinámico: el tipo se infiere e incluso cambia en tiempo de ejecución, acelerando el desarrollo pero trasladando errores de tipo al runtime.",
        "example": "Utilizar TypeScript (estático) en lugar de JavaScript puro para el backend de una API crítica, detectando incompatibilidades de tipos antes de que el código llegue a producción."
      },
      {
        "term": "Recolección de basura (Garbage Collector)",
        "definition": "Mecanismo automático de gestión de memoria que identifica y libera los bloques de memoria RAM que ya no son accesibles ni referenciados por el programa, evitando fugas de memoria (memory leaks) sin intervención manual del programador.",
        "example": "El Garbage Collector de Python libera automáticamente la memoria del array NumPy de 10 GB que contenía el dataset de entrenamiento una vez que el objeto sale del ámbito de ejecución de la función."
      },
      {
        "term": "Fases de compilación e interpretación de código",
        "definition": "Compilación: análisis léxico (tokenización) → análisis sintáctico (AST) → análisis semántico → generación de código intermedio → optimización → generación de código máquina. Interpretación: el intérprete realiza estas fases una línea a la vez en tiempo real.",
        "example": "El compilador de Go (Golang) completa todas las fases de compilación en segundos y genera un binario ejecutable nativo que no requiere ningún runtime instalado en el servidor."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Compiladores frente a Intérpretes en tiempo real",
        "definition": "El compilador genera un artefacto binario ejecutable autónomo y optimizado que corre directamente en la CPU sin intermediarios. El intérprete requiere estar instalado en la máquina destino y traduce el código fuente a instrucciones en cada ejecución, con overhead de traducción.",
        "example": "Un binario compilado en Go puede desplegarse en un contenedor Docker minimalista de 5 MB sin dependencias. El equivalente en Python necesita instalar el intérprete y todas las librerías del entorno virtual."
      }
    ],
    "quiz": {
      "question": "Un equipo de desarrollo debe elegir el lenguaje de programación para dos módulos de un sistema de IA: el núcleo de inferencia de modelos de alta frecuencia (millones de predicciones por segundo) y el script de extracción y transformación de datos (ETL) que se ejecuta una vez al día. ¿Qué lenguajes elegirías y por qué?",
      "options": [
        "Usar Python para ambos módulos, ya que Python es el único lenguaje compatible con modelos de Inteligencia Artificial.",
        "Usar un lenguaje compilado de tipado estático (como C++ o Rust) para el núcleo de inferencia de alta frecuencia (máximo rendimiento en tiempo de ejecución) y Python para el ETL diario (máxima productividad de desarrollo con librerías como Pandas).",
        "Usar JavaScript y TypeScript para ambos módulos, ya que Node.js es el único servidor capaz de comunicarse con bases de datos NoSQL.",
        "Usar únicamente lenguaje ensamblador (Assembly) para ambos módulos por ser el más cercano al hardware."
      ],
      "answer": 1,
      "explanation": "Correcto. La decisión de lenguaje debe alinearse con el perfil de rendimiento requerido. Para el núcleo de inferencia de alta frecuencia se prioriza la velocidad de ejecución (lenguaje compilado, tipado estático, sin Garbage Collector pausante). Para el ETL diario se prioriza la productividad y el ecosistema de librerías de datos (Python con Pandas, PySpark) donde la velocidad no es el factor crítico."
    }
  },
  {
    "id": 35,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "8. Resolver problemas utilizando los elementos que intervienen en el desarrollo del programa.",
    "il": "8.1 Utiliza identificadores, tipos de datos, constantes y variables.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Elementos de un programa",
        "definition": "Los componentes léxicos fundamentales que conforman el código fuente de cualquier programa: palabras reservadas del lenguaje (keywords), identificadores definidos por el programador, literales (valores directos), operadores matemáticos/lógicos y delimitadores estructurales.",
        "example": "En la instrucción 'int suma = a + b;', 'int' es una palabra reservada, 'suma', 'a' y 'b' son identificadores, '+' es un operador y ';' es un delimitador."
      },
      {
        "term": "Tipos de datos primitivos",
        "definition": "Los tipos de datos atómicos e indivisibles predefinidos por el lenguaje de programación: enteros (int, long), punto flotante (float, double), booleanos (bool: true/false) y caracteres (char). Son la base para construir estructuras de datos más complejas.",
        "example": "Declarar el umbral de temperatura de un servidor como 'const float TEMP_MAX = 85.5;' usando un tipo de dato de punto flotante de precisión simple."
      },
      {
        "term": "Declaración de variables y constantes",
        "definition": "Las variables son espacios de memoria RAM con nombre simbólico cuyo valor puede cambiar durante la ejecución del programa. Las constantes son espacios de memoria cuyo valor es fijo e inmutable desde su inicialización (ej. PI = 3.14159...).",
        "example": "Declarar 'let contador = 0;' como variable que cambia en cada iteración y 'const MAX_REINTENTOS = 3;' como constante que define el límite de intentos del sistema de login."
      },
      {
        "term": "Reglas de identificadores",
        "definition": "El conjunto de reglas léxicas que determinan los nombres válidos para variables, funciones y clases: deben comenzar con una letra o guión bajo (_), no pueden contener espacios, no pueden ser palabras reservadas del lenguaje y son case-sensitive (distinguen mayúsculas de minúsculas).",
        "example": "El identificador 'temperaturaServidorGPU' es válido (camelCase). El identificador '2temp' es inválido porque comienza con un número. El identificador 'for' es inválido porque es una palabra reservada."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Ámbito de una variable (local vs global)",
        "definition": "El ámbito (scope) define la región del código fuente donde una variable es accesible. Una variable Local solo existe dentro del bloque o función donde fue declarada (vive en el stack). Una variable Global es accesible desde cualquier parte del programa pero representa un anti-patrón de diseño.",
        "example": "Declarar el token de autenticación como variable local dentro de la función de login para que sea destruida al retornar, evitando que quede expuesta en memoria global."
      },
      {
        "term": "Palabras reservadas del lenguaje",
        "definition": "Tokens predefinidos e inmutables por el lenguaje de programación que tienen un significado sintáctico y semántico específico para el compilador o intérprete, por lo que no pueden ser utilizados como identificadores por el programador.",
        "example": "En Python, palabras como 'if', 'for', 'while', 'class', 'def', 'import' y 'return' son reservadas. Intentar declarar 'class = \"Informatica\"' produce un SyntaxError."
      },
      {
        "term": "Conversión de tipos (casting) y operadores aritméticos/asignación",
        "definition": "El Casting es la conversión explícita de un valor de un tipo de dato a otro (ej. int → float). Los operadores aritméticos (+, -, *, /, %, //) realizan operaciones matemáticas. Los operadores de asignación (=, +=, -=, *=) asignan o modifican el valor de una variable.",
        "example": "Convertir el resultado entero de una división 'int totalRegistros = 7' a flotante con 'float(totalRegistros) / 3' para obtener 2.333 en lugar de 2 por división entera."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Variables dinámicas frente a Constantes simbólicas e inmutables",
        "definition": "Las variables son contenedores de memoria mutables que almacenan un estado que evoluciona durante la ejecución del programa. Las constantes simbólicas son identificadores que apuntan a un valor fijo e inmutable en toda la vida del programa, mejorando la legibilidad y evitando valores mágicos.",
        "example": "Reemplazar el número mágico '3.14159' disperso en el código por la constante simbólica 'PI = 3.14159', lo que facilita el mantenimiento y centraliza el valor."
      }
    ],
    "quiz": {
      "question": "En el diseño del código fuente de un sistema de gestión de estudiantes, un programador declara: 'MAX_ALUMNOS = 35' y 'contador_actual = 0'. ¿Cuál es la diferencia semántica y de comportamiento en memoria entre estas dos declaraciones?",
      "options": [
        "Ambas son exactamente iguales y el compilador las trata de la misma forma en tiempo de ejecución.",
        "'MAX_ALUMNOS = 35' es una constante simbólica: su valor es inmutable y fijo durante toda la ejecución del programa (representa una regla de negocio). 'contador_actual = 0' es una variable dinámica: su valor cambia en cada iteración del programa conforme los alumnos son registrados.",
        "'contador_actual' es una constante de tipo flotante y 'MAX_ALUMNOS' es una variable global de tipo string.",
        "Ambas son variables locales del stack que se destruyen al terminar la función principal del programa."
      ],
      "answer": 1,
      "explanation": "Correcto. La diferencia es semántica y de intención de diseño. Una constante ('MAX_ALUMNOS') representa un valor de negocio fijo e inmutable que no debe cambiar durante la ejecución, mejora la legibilidad y previene modificaciones accidentales. Una variable ('contador_actual') es un contenedor mutable cuyo valor está destinado a cambiar durante la ejecución del programa conforme el estado del sistema evoluciona."
    }
  },
  {
    "id": 36,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "9. Resuelve problemas utilizando bloques de decisión, condiciones compuestas y estructura repetitivas en casos específicos.",
    "il": "9.1 Aplica el uso de bloques de decisión, condiciones compuestas y estructuras repetitivas en la resolución de problemas.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Lógica booleana",
        "definition": "Rama del álgebra matemática que opera únicamente sobre dos valores lógicos posibles: verdadero (True/1) y falso (False/0). Es el fundamento matemático de todos los circuitos digitales y de las instrucciones condicionales en programación.",
        "example": "Representar la condición de acceso a un panel de administración como la expresión booleana: 'esAdmin AND estaAutenticado' que solo retorna True cuando ambas condiciones son simultáneamente verdaderas."
      },
      {
        "term": "Operadores lógicos (AND, OR, NOT)",
        "definition": "Conectores de álgebra booleana que combinan o invierten expresiones booleanas. AND (&&): retorna True solo si ambos operandos son True. OR (||): retorna True si al menos uno es True. NOT (!): invierte el valor lógico del operando.",
        "example": "Validar un formulario de registro con 'nombre != '' AND edad >= 18 AND NOT emailYaExiste' para asegurar que todos los campos son válidos antes de crear la cuenta."
      },
      {
        "term": "Condiciones compuestas",
        "definition": "Expresiones lógicas que encadenan múltiples comparaciones o variables booleanas mediante operadores AND, OR y NOT para tomar decisiones complejas y precisas en una sola evaluación estructurada.",
        "example": "Activar el sistema de alertas críticas del servidor solo si '(temperatura > 90 OR usoRAM > 95) AND sistemaMonitorActivo' son simultáneamente verdaderos."
      },
      {
        "term": "Optimización de bucles",
        "definition": "Técnicas algorítmicas que reducen la complejidad computacional y el tiempo de ejecución de los ciclos de repetición, tales como minimizar operaciones dentro del bucle, usar estructuras de datos adecuadas, aplicar early exit con 'break' o evitar recalcular valores constantes en cada iteración.",
        "example": "Mover el cálculo de 'len(lista_datos)' fuera del bucle 'for' para evitar que se recalcule innecesariamente en cada una de las 100,000 iteraciones del ciclo."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Tablas de verdad",
        "definition": "Herramienta matemática que enumera de forma exhaustiva todas las combinaciones posibles de los valores de entrada booleanos y la salida lógica resultante de aplicar un operador o una expresión booleana compuesta.",
        "example": "Construir la tabla de verdad de la expresión 'A AND (NOT B OR C)' con 8 filas (2^3 combinaciones) para verificar su comportamiento antes de implementarla en el sistema de permisos."
      },
      {
        "term": "Leyes de De Morgan en condiciones lógicas",
        "definition": "Reglas de transformación algebraica que permiten reescribir expresiones booleanas negadas de forma equivalente. Primera ley: NOT(A AND B) = NOT A OR NOT B. Segunda ley: NOT(A OR B) = NOT A AND NOT B. Son fundamentales para simplificar condicionales complejos.",
        "example": "Simplificar 'if NOT (usuarioActivo AND tienePermiso)' a la forma equivalente 'if NOT usuarioActivo OR NOT tienePermiso' para mejorar la legibilidad del código de control de acceso."
      },
      {
        "term": "Evaluación de circuito corto (Short-circuit evaluation) y optimización algorítmica",
        "definition": "Optimización de los evaluadores lógicos: en AND, si el primer operando es False, se omite inmediatamente la evaluación del segundo. En OR, si el primer operando es True, se omite el segundo. Esto mejora el rendimiento y evita errores de runtime.",
        "example": "Escribir 'if objeto != None AND objeto.es_valido()' garantiza que el método nunca se llama sobre None gracias a la evaluación en cortocircuito, evitando un NullPointerException."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Álgebra de Boole y simplificación de expresiones lógicas",
        "definition": "El conjunto de leyes y propiedades (absorción, idempotencia, De Morgan, complemento) que permiten reducir y simplificar expresiones booleanas complejas a formas mínimas equivalentes, disminuyendo los ciclos de CPU necesarios para evaluarlas.",
        "example": "Simplificar la condición redundante 'A AND (A OR B)' usando la Ley de Absorción a simplemente 'A', eliminando la evaluación innecesaria del subexpresión '(A OR B)'."
      }
    ],
    "quiz": {
      "question": "En la implementación de un sistema de control de acceso, un programador escribe la condición: 'if (conexionDB != None AND conexionDB.ping() == True)'. ¿Qué beneficio de seguridad y rendimiento aporta la evaluación en cortocircuito (Short-circuit evaluation) al operador AND en este caso?",
      "options": [
        "Hace que ambas expresiones se evalúen en paralelo en múltiples hilos para duplicar la velocidad.",
        "Si 'conexionDB' es None (primer operando: False), el operador AND detiene de inmediato la evaluación sin llamar a 'conexionDB.ping()', evitando un NullPointerException/AttributeError en runtime y ahorrando el overhead de la llamada al método.",
        "Convierte automáticamente el resultado booleano en un número entero para almacenarlo en la base de datos.",
        "Fuerza la reevaluación completa de ambos operandos en cada ciclo del bucle para garantizar mayor precisión."
      ],
      "answer": 1,
      "explanation": "Correcto. La evaluación en cortocircuito del operador AND es una optimización que detiene la evaluación en cuanto encuentra el primer operando falso, ya que el resultado del AND completo ya está determinado (siempre será False). Esto es crucial para la seguridad del código: al evaluar primero 'conexionDB != None', si la condición es falsa, se evita llamar métodos sobre un objeto nulo, lo que causaría un error en tiempo de ejecución."
    }
  },
  {
    "id": 37,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "10. Examinar los elementos del entorno de desarrollo programación interpretada multiparadigma y las sintaxis, para la elaboración de programas, aplicando las estructuras de control, funciones, listas, diccionarios.",
    "il": "10.1 Reconoce los elementos que conforman el entorno e IDE para el trabajo en la programación orientada a objetos utilizando lenguajes de programación interpretada multiparadigma.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Entornos de desarrollo (IDEs)",
        "definition": "Aplicaciones de software que integran en un único espacio de trabajo todas las herramientas necesarias para el desarrollo de software: editor de código con autocompletado inteligente, depurador (debugger), terminal integrada, control de versiones Git y gestión de extensiones y plugins.",
        "example": "Configurar VSCode con las extensiones Python (Pylance), Docker y GitLens para desarrollar microservicios de IA con autocompletado de tipos, debugging remoto en contenedores y trazabilidad de commits."
      },
      {
        "term": "Python o similar",
        "definition": "Lenguaje de alto nivel, tipado dinámico, de propósito general con sintaxis minimalista enfocada en la legibilidad. Su ecosistema de librerías científicas (NumPy, Pandas, TensorFlow, PyTorch) lo ha posicionado como el lenguaje dominante en IA, ciencia de datos y automatización.",
        "example": "Utilizar Python con la librería Pandas para limpiar y transformar un dataset de 500,000 registros de transacciones financieras antes de entrenarlo como dataset para un modelo de detección de fraude."
      },
      {
        "term": "Estructuras de datos avanzadas (listas, tuplas, diccionarios)",
        "definition": "Colecciones de datos integradas en Python. Listas (list): colecciones ordenadas y mutables, admiten duplicados. Tuplas (tuple): colecciones ordenadas e inmutables, más eficientes en memoria. Diccionarios (dict): almacenamiento clave-valor de alta velocidad con acceso O(1) mediante hash.",
        "example": "Usar un diccionario Python para cachear en memoria los resultados de predicciones de IA por 'user_id', logrando recuperar la predicción en tiempo constante O(1) sin repetir inferencias costosas."
      },
      {
        "term": "Definición de funciones",
        "definition": "Las funciones son bloques de código reutilizables con un nombre, parámetros de entrada definidos y un valor de retorno opcional. Implementan el principio DRY (Don't Repeat Yourself) y la modularidad del programa, facilitando las pruebas unitarias.",
        "example": "Definir una función 'def calcular_promedio(notas: list) -> float' que reciba la lista de calificaciones y retorne el promedio aritmético, permitiendo reutilizarla en cualquier parte del sistema educativo."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Métodos integrados de listas/diccionarios",
        "definition": "Las operaciones nativas que Python provee para manipular estructuras de datos. Listas: append(), remove(), sort(), index(). Diccionarios: keys(), values(), items(), get(), update(). Estos métodos están optimizados a nivel de C en el intérprete CPython.",
        "example": "Usar 'diccionario.get(clave, valor_por_defecto)' en lugar de verificar manualmente con 'if clave in diccionario' para obtener un valor de forma segura sin lanzar KeyError."
      },
      {
        "term": "Mutabilidad vs inmutabilidad",
        "definition": "Mutabilidad: la propiedad de un objeto que permite modificar su contenido después de su creación (listas, diccionarios, conjuntos). Inmutabilidad: la propiedad de objetos cuyo estado no puede cambiar después de ser creados (strings, tuplas, números, frozensets).",
        "example": "Usar una Tupla en lugar de una Lista para almacenar las coordenadas fijas de un punto (x, y) en un mapa, aprovechando su inmutabilidad para garantizar que no serán modificadas accidentalmente."
      },
      {
        "term": "Argumentos por valor y por referencia, y funciones Lambda",
        "definition": "Por Valor: se pasa una copia del dato (los tipos inmutables en Python). Por Referencia: se pasa la dirección de memoria del objeto original (los tipos mutables). Lambda: funciones anónimas de una sola expresión, ideales para callbacks y operaciones de alto orden.",
        "example": "Usar una función lambda 'sorted(estudiantes, key=lambda e: e['promedio'], reverse=True)' para ordenar la lista de diccionarios de estudiantes de mayor a menor promedio sin definir una función completa."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Manipulación avanzada de colecciones de datos y paso de parámetros funcionales",
        "definition": "El dominio de las estructuras de datos integradas de Python (listas, diccionarios, conjuntos) y el conocimiento de cómo se pasan los argumentos a las funciones (por valor para inmutables, por referencia para mutables), con implicaciones directas en la integridad de los datos.",
        "example": "Modificar una lista pasada como argumento a una función afecta la lista original en el ámbito del llamador, mientras que reasignar la variable del parámetro dentro de la función no tiene efecto externo."
      }
    ],
    "quiz": {
      "question": "En Python, ¿cuál es la diferencia práctica de rendimiento y semántica entre usar una Lista (list) y una Tupla (tuple) para almacenar una colección de coordenadas geográficas fijas que nunca cambiarán durante la ejecución del programa?",
      "options": [
        "No existe ninguna diferencia: las listas y las tuplas son intercambiables y tienen el mismo rendimiento y comportamiento en todos los casos.",
        "La Tupla es la elección correcta: al ser inmutable, ocupa menos memoria, tiene mayor velocidad de iteración y comunica la intención semántica de que los datos son fijos. La Lista es mutable y añade overhead innecesario para datos que nunca cambiarán.",
        "La Lista es siempre más eficiente que la Tupla para cualquier colección de datos numéricos.",
        "Las Tuplas no pueden almacenar números de punto flotante, solo strings y enteros."
      ],
      "answer": 1,
      "explanation": "Correcto. La elección entre Lista y Tupla no es arbitraria. Las Tuplas son objetos inmutables, lo que las hace más compactas en memoria y más rápidas de iterar que las Listas. Al usarlas para datos que conceptualmente son fijos (como coordenadas), se comunica la intención del programador y se protegen los datos de modificaciones accidentales. Además, las Tuplas pueden usarse como claves en diccionarios, algo imposible con listas mutables."
    }
  },
  {
    "id": 38,
    "subarea": "Programación",
    "nivel": "Décimo",
    "ra": "11. Aplicar los elementos y sintaxis del entorno de desarrollo con programación orientada a objetos, utilizando lenguajes de programación interpretada multiparadigma.",
    "il": "11.1 Diferencia la sintaxis de codificación y funciones de programas que utilicen módulos, paquetes, herencia.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Programación Orientada a Objetos básica",
        "definition": "Paradigma de programación que organiza el código en torno a 'Objetos' que combinan datos (atributos/propiedades) y comportamiento (métodos/funciones), modelando entidades del mundo real. Se basa en cuatro pilares: Encapsulamiento, Abstracción, Herencia y Polimorfismo.",
        "example": "Modelar la entidad 'Servidor' como una clase con atributos (ip, ram_gb, cpu_cores) y métodos (iniciar(), apagar(), obtener_uso_cpu()) en lugar de manejar variables globales sueltas."
      },
      {
        "term": "Clases y objetos",
        "definition": "La Clase es el plano de construcción (template) que define la estructura, atributos y métodos de un tipo de entidad. El Objeto es una instancia concreta e individual creada a partir de ese plano, con sus propios valores de atributos en memoria.",
        "example": "Definir la clase 'ModeloIA' como plantilla y crear dos instancias independientes: 'modelo_produccion = ModeloIA()' y 'modelo_pruebas = ModeloIA()', cada una con sus propios parámetros de configuración."
      },
      {
        "term": "Modularidad (módulos y paquetes)",
        "definition": "La práctica de dividir el código en unidades lógicas y reutilizables (módulos: archivos .py individuales) agrupadas en paquetes (carpetas con __init__.py). Permite la separación de responsabilidades, facilita las pruebas unitarias y evita el código espagueti.",
        "example": "Organizar el proyecto de IA con módulos separados: 'modelos/clasificador.py', 'datos/preprocesamiento.py' y 'api/rutas.py', importando cada módulo donde se necesita."
      },
      {
        "term": "Herencia simple",
        "definition": "Mecanismo de POO que permite que una clase hija (subclase) herede automáticamente todos los atributos y métodos de una clase padre (superclase), pudiendo extenderlos o sobreescribirlos (Override) sin duplicar código.",
        "example": "La clase 'ModeloNLP' hereda de la clase base 'ModeloML', reutilizando el método 'entrenar()' de la base y sobreescribiendo el método 'predecir()' para implementar la lógica específica de procesamiento de texto."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Instanciación de objetos y constructores (__init__)",
        "definition": "La instanciación es el proceso de crear un objeto concreto en memoria a partir de una clase. El constructor '__init__' es el método especial que se ejecuta automáticamente al instanciar, inicializando los atributos del objeto con los valores proporcionados.",
        "example": "Al ejecutar 'servidor = Servidor(ip=\"10.0.0.1\", ram=64)', Python llama automáticamente a 'Servidor.__init__(self, ip, ram)' para inicializar los atributos de la nueva instancia en memoria."
      },
      {
        "term": "Encapsulamiento (atributos públicos, privados, protegidos)",
        "definition": "El principio de restringir el acceso directo a los atributos internos de un objeto, exponiéndolos solo a través de métodos controlados (getters/setters). En Python: público (nombre), protegido (_nombre, convención interna), privado (__nombre, name mangling).",
        "example": "Declarar el atributo '__api_key' como privado en la clase 'ClienteIA' para impedir el acceso directo desde el exterior, forzando su lectura a través del método 'get_api_key()' que puede aplicar validaciones."
      },
      {
        "term": "Concepto de espacio de nombres (namespaces)",
        "definition": "Un namespace es un contenedor que mapea nombres de identificadores a objetos en memoria, evitando colisiones entre nombres en diferentes contextos. En Python existen 4 ámbitos: Local (función), Enclosing (función exterior), Global (módulo) y Built-in (LEGB rule).",
        "example": "Definir una variable 'contador = 0' tanto dentro de una clase como en el ámbito global: Python las trata como dos objetos completamente distintos gracias al sistema de namespaces por clase y por módulo."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Modularidad y encapsulamiento en POO: Clases base e instanciación de Objetos",
        "definition": "La capacidad de definir clases bien encapsuladas que ocultan su implementación interna e instanciar objetos con estado propio, como estrategia central para construir sistemas de software escalables, testeables y mantenibles.",
        "example": "Crear la clase 'BaseDatos' con métodos públicos (conectar, consultar, cerrar) y atributos privados (__contraseña, __host), de manera que ningún módulo externo pueda acceder directamente a las credenciales."
      }
    ],
    "quiz": {
      "question": "En Programación Orientada a Objetos, ¿cuál es la diferencia conceptual e ingenieril entre una 'Clase' y un 'Objeto' (instancia), y cuál es el rol del método constructor '__init__' en Python?",
      "options": [
        "La Clase y el Objeto son sinónimos intercambiables en Python; '__init__' es una función externa que se llama manualmente antes de crear cualquier variable.",
        "La Clase es el plano de diseño abstracto que define atributos y métodos (no ocupa memoria para datos). El Objeto es una instancia concreta e independiente creada en memoria RAM a partir de la Clase. El método '__init__' es el constructor que inicializa automáticamente los atributos del objeto con sus valores iniciales al momento de la instanciación.",
        "Un Objeto solo puede crearse una vez por Clase, siendo imposible tener múltiples instancias de la misma Clase en Python.",
        "El método '__init__' destruye todos los atributos del objeto al finalizar su ejecución para liberar memoria."
      ],
      "answer": 1,
      "explanation": "Correcto. La Clase es una plantilla o molde abstracto que define la estructura y el comportamiento de un tipo de entidad, pero por sí sola no almacena datos de instancia. Al ejecutar 'mi_objeto = MiClase(argumentos)', Python reserva un nuevo bloque de memoria RAM para el objeto y llama automáticamente al método especial '__init__' para inicializar sus atributos con los valores iniciales. Múltiples objetos pueden crearse desde la misma Clase, cada uno con su propio estado independiente en memoria."
    }
  },
  {
    "id": 39,
    "subarea": "Programación",
    "nivel": "Undécimo",
    "ra": "12. Desarrollar aplicaciones utilizando la programación orientada objetos en la resolución de problemas específicos.",
    "il": "12.1 Explica los métodos sobre escritura, sobrecarga, herencia, polimorfismo, relación entre objetos en la programación orientada objetos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "POO avanzada",
        "definition": "La aplicación de los pilares avanzados de la Programación Orientada a Objetos: Polimorfismo, Abstracción mediante clases abstractas e interfaces, composición sobre herencia y uso de patrones de diseño para construir sistemas de software escalables y mantenibles.",
        "example": "Diseñar un sistema de procesamiento de pagos usando polimorfismo donde los objetos TarjetaCredito, PayPal y CryptoPago comparten la interfaz 'pagar(monto)' pero implementan la lógica de forma independiente."
      },
      {
        "term": "Sobrecarga y sobreescritura de métodos",
        "definition": "La Sobreescritura (Override) permite que una subclase redefina un método heredado de su clase padre con una implementación propia, usando el mismo nombre y firma. La Sobrecarga (Overloading) define múltiples versiones del mismo método con diferentes parámetros (no nativo en Python, se implementa con argumentos por defecto).",
        "example": "La subclase 'ModeloGPT' sobreescribe el método 'generar_respuesta()' de la clase padre 'ModeloLLM' con su propio algoritmo de inferencia basado en transformers."
      },
      {
        "term": "Polimorfismo",
        "definition": "Propiedad de POO que permite que objetos de diferentes clases respondan al mismo mensaje (llamada de método) de manera específica a su tipo. Esto desacopla el código del cliente de las implementaciones concretas, facilitando la extensión sin modificación (principio Open/Closed).",
        "example": "Llamar al método 'serializar()' sobre una lista de objetos heterogéneos (CSV, JSON, XML) y que cada uno produzca el formato de salida correcto sin que el código llamador sepa qué tipo de objeto es."
      },
      {
        "term": "Relaciones de agregación y composición",
        "definition": "Agregación: relación 'tiene un' débil donde el objeto hijo puede existir de forma independiente del padre (ej. Universidad-Estudiante). Composición: relación 'tiene un' fuerte donde el objeto hijo no puede existir sin el padre y se destruye con él (ej. Servidor-CPU).",
        "example": "Modelar la clase 'Servidor' con composición hacia 'CPU' (la CPU no existe sin el servidor), pero con agregación hacia 'Administrador' (el administrador existe aunque el servidor sea dado de baja)."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Clases abstractas e Interfaces",
        "definition": "Las Clases Abstractas (en Python: ABC - Abstract Base Class) definen métodos abstractos sin implementar que las subclases DEBEN implementar obligatoriamente. Establecen contratos de comportamiento garantizados para todo el árbol de herencia.",
        "example": "Definir la clase abstracta 'ModeloML' con el método abstracto '@abstractmethod def predecir(datos)' para forzar a todas las subclases (SVM, RandomForest, RedNeuronal) a implementar obligatoriamente su propia lógica de predicción."
      },
      {
        "term": "Herencia múltiple",
        "definition": "Mecanismo de POO donde una clase hija hereda atributos y métodos de más de una clase padre simultáneamente. Python la soporta usando el algoritmo MRO (Method Resolution Order / C3 linearization) para resolver ambigüedades cuando múltiples padres definen el mismo método.",
        "example": "Crear la clase 'AsistenteIA' que hereda de 'ModeloLenguaje' (capacidad de generar texto) y de 'BuscadorWeb' (capacidad de recuperar información), combinando ambas capacidades."
      },
      {
        "term": "Palabras clave super() y diagramado UML",
        "definition": "super() es una función que permite llamar al método del padre inmediato en la cadena de herencia desde dentro de una subclase, sin referenciar explícitamente el nombre de la clase padre. UML (Unified Modeling Language) es el estándar gráfico para diagramar la arquitectura de clases.",
        "example": "Usar 'super().__init__(nombre, ip)' en el constructor de 'ServidorGPU' para inicializar los atributos heredados de la clase padre 'Servidor' antes de agregar los atributos exclusivos de GPU."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Herencia jerárquica, Polimorfismo y sobreescritura de métodos",
        "definition": "La capacidad de construir jerarquías de clases donde las subclases especializadas sobreescriben (Override) los métodos de la clase padre para proporcionar comportamientos polimórficos específicos, preservando la interfaz pública común definida por la clase base.",
        "example": "Una función 'procesar_lote(modelos)' itera una lista de objetos polimórficos y llama a 'modelo.evaluar()' en cada uno, sin saber ni importarle si el modelo es SVM, BERT o XGBoost."
      }
    ],
    "quiz": {
      "question": "En el diseño de un sistema de IA con múltiples tipos de modelos de Machine Learning, ¿cómo implementarías el Polimorfismo correctamente para que el código de evaluación funcione con cualquier tipo de modelo sin necesidad de modificarlo?",
      "options": [
        "Crear un 'if/elif' gigante que verifique el tipo de objeto con isinstance() y llame al método específico de evaluación de cada clase por separado.",
        "Definir una Clase Abstracta 'ModeloML' con un método abstracto '@abstractmethod def evaluar(datos)'. Cada subclase (SVM, RandomForest, BERT) implementa su propia lógica de evaluación. El código cliente solo llama a 'modelo.evaluar(datos)' de forma genérica sobre cualquier subclase.",
        "Copiar y pegar la lógica de evaluación en cada clase individualmente para garantizar que cada modelo sea completamente independiente.",
        "Usar únicamente herencia múltiple sin clases abstractas para mezclar libremente todos los métodos de evaluación."
      ],
      "answer": 1,
      "explanation": "Correcto. El Polimorfismo permite que el código cliente opere sobre la interfaz abstracta genérica ('ModeloML') sin acoplarse a ninguna implementación concreta. Al definir un contrato formal con una Clase Abstracta, se garantiza que toda subclase implementará el método 'evaluar()', y el código de evaluación en lote puede simplemente iterar la lista y llamar el método sin necesidad de conocer el tipo concreto. Esto sigue el principio Open/Closed de SOLID."
    }
  },
  {
    "id": 40,
    "subarea": "Programación",
    "nivel": "Undécimo",
    "ra": "12. Desarrollar aplicaciones utilizando la programación orientada objetos en la resolución de problemas específicos.",
    "il": "12.2 Emplea métodos u operaciones de entrada y salida, conexión a bases de datos y manejo de excepciones en la construcción de programas con lenguajes de programación orientados objetos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Persistencia de datos",
        "definition": "La capacidad de almacenar el estado de los datos de una aplicación de forma duradera en un medio de almacenamiento secundario (disco, base de datos, nube), de modo que sobreviva al cierre del proceso, la sesión o el reinicio del sistema.",
        "example": "Guardar el progreso de entrenamiento de un modelo de IA en un archivo checkpoint.h5 en disco, permitiendo reanudar el entrenamiento desde ese punto si el proceso es interrumpido."
      },
      {
        "term": "Manejo de archivos (E/S)",
        "definition": "Las operaciones de entrada/salida (I/O) que permiten leer y escribir datos en el sistema de archivos del sistema operativo: apertura de archivos en modo lectura ('r'), escritura ('w'), adición ('a') o binario ('b'), y su cierre controlado para liberar recursos.",
        "example": "Usar Python para leer un archivo CSV de 50,000 registros de entrenamiento, procesarlos fila a fila con un loop y escribir el dataset limpio en un nuevo archivo JSON estructurado."
      },
      {
        "term": "Conectores de bases de datos en código",
        "definition": "Librerías y drivers que permiten a las aplicaciones establecer conexiones programáticas con motores de bases de datos, enviar consultas SQL o comandos NoSQL y recibir conjuntos de resultados para procesarlos en el programa.",
        "example": "Usar psycopg2 (driver nativo de PostgreSQL para Python) para conectar el backend de la aplicación con la base de datos, ejecutar consultas parametrizadas y mapear los resultados a objetos del modelo de negocio."
      },
      {
        "term": "Gestión estructurada de excepciones (try, catch/except)",
        "definition": "Mecanismo de control de errores en tiempo de ejecución que captura y maneja de forma controlada las excepciones (errores inesperados) sin interrumpir el flujo del programa. En Python: try (código riesgoso), except (manejador de error), else (si no hubo error) y finally (siempre se ejecuta).",
        "example": "Envolver la conexión a la base de datos en un bloque try/except para capturar el error 'ConnectionRefusedError' y retornar un mensaje de error HTTP 503 amigable en lugar de dejar que la aplicación colapse."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Bloques de cierre automático (with en Python)",
        "definition": "La sentencia 'with' implementa el patrón de Context Manager (Gestor de Contexto) que garantiza la ejecución automática del código de limpieza (cierre de archivos, liberación de conexiones) al finalizar el bloque, incluso si ocurre una excepción interna.",
        "example": "Usar 'with open(\"datos.csv\", \"r\") as archivo:' para garantizar que el archivo sea cerrado automáticamente al terminar la lectura, evitando fugas de descriptores de archivo."
      },
      {
        "term": "Controladores de bases de datos (JDBC/ODBC/Drivers nativos)",
        "definition": "JDBC (Java Database Connectivity) y ODBC (Open Database Connectivity) son APIs estándar que proveen una interfaz unificada para conectar aplicaciones a diferentes motores de bases de datos. Los drivers nativos ofrecen mayor rendimiento al comunicarse directamente con el protocolo del motor.",
        "example": "Usar el driver nativo 'motor' de SQLAlchemy con la cadena de conexión 'postgresql+psycopg2://usuario:clave@host:5432/bd' para conectar el ORM al servidor PostgreSQL de producción."
      },
      {
        "term": "Inyección SQL básica y excepciones personalizadas",
        "definition": "La inyección SQL es una vulnerabilidad crítica causada por concatenar entrada del usuario directamente en queries SQL. Se previene con consultas parametrizadas. Las excepciones personalizadas son clases que heredan de Exception para crear errores semánticos específicos del dominio.",
        "example": "Usar consultas parametrizadas 'cursor.execute(\"SELECT * FROM users WHERE id = %s\", (user_id,))' en lugar de concatenación de strings para evitar ataques de SQL Injection."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Gestión estructurada de excepciones con try-except para persistencia",
        "definition": "La práctica de envolver las operaciones de E/S (lectura de archivos, consultas a bases de datos, peticiones de red) en bloques try/except/finally para manejar errores predecibles de forma elegante, garantizando que los recursos (archivos, conexiones) siempre se liberen correctamente.",
        "example": "Implementar un bloque try/except/finally que intente guardar el estado del modelo en disco, capture FileNotFoundError o PermissionError con mensajes descriptivos y garantice el cierre del archivo en el bloque finally."
      }
    ],
    "quiz": {
      "question": "Al implementar una función que lee datos de un archivo CSV y los inserta en una base de datos PostgreSQL, ¿cuál es el patrón correcto de gestión de recursos y excepciones en Python para garantizar la integridad de los datos y evitar fugas de recursos?",
      "options": [
        "Abrir el archivo con open() sin try/except y confiar en que el sistema operativo cierre los recursos automáticamente al terminar el programa.",
        "Usar sentencias 'with' anidadas para gestionar automáticamente el cierre del archivo y la conexión a la base de datos, envueltas en un bloque try/except que capture errores específicos (FileNotFoundError, psycopg2.OperationalError) y un bloque finally que garantice el rollback de la transacción en caso de fallo.",
        "Usar un único bloque except sin especificar el tipo de error para capturar todos los posibles errores con un mensaje genérico.",
        "Deshabilitar el manejo de excepciones para mejorar el rendimiento de la lectura del CSV en producción."
      ],
      "answer": 1,
      "explanation": "Correcto. El patrón robusto de E/S en Python combina: (1) sentencias 'with' para el Context Manager que garantizan el cierre automático del archivo y la conexión a BD incluso ante excepciones, (2) bloques try/except tipados que capturan errores específicos y conocidos (no bare except), y (3) un bloque finally que ejecuta el rollback de la transacción de BD si ocurrió un error, garantizando la atomicidad e integridad de los datos."
    }
  },
  {
    "id": 41,
    "subarea": "Programación",
    "nivel": "Undécimo",
    "ra": "13. Utilizar las pilas y colas en la estructura de datos.",
    "il": "13.1 Diferencia entre las pilas y colas en la implementación como estructura de datos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Estructuras de datos lineales",
        "definition": "Colecciones de datos donde los elementos se organizan de forma secuencial y la relación entre ellos es lineal (cada elemento tiene un único predecesor y un único sucesor, salvo el primero y el último). Ejemplos: Pilas, Colas, Listas enlazadas.",
        "example": "Modelar el historial de navegación de un usuario como una estructura de datos lineal, donde cada página visitada se apila sobre la anterior para poder retroceder en orden inverso."
      },
      {
        "term": "Pilas (Stack - LIFO)",
        "definition": "Estructura de datos lineal que sigue la política LIFO (Last In, First Out): el último elemento insertado es el primero en ser extraído. Las operaciones fundamentales son push (insertar en el tope) y pop (extraer del tope), ambas de complejidad temporal O(1).",
        "example": "El call stack de cualquier lenguaje de programación es una pila: cada llamada a función apila (push) un stack frame, y al retornar la función, el frame se desapila (pop)."
      },
      {
        "term": "Colas (Queue - FIFO)",
        "definition": "Estructura de datos lineal que sigue la política FIFO (First In, First Out): el primer elemento insertado es el primero en ser extraído. Las operaciones son enqueue (insertar al final) y dequeue (extraer del frente), ambas de complejidad temporal O(1) con implementación eficiente.",
        "example": "Un sistema de cola de mensajes (message queue) como RabbitMQ implementa la política FIFO para garantizar que las tareas de procesamiento de pedidos sean atendidas en el orden exacto en que fueron recibidas."
      },
      {
        "term": "Operaciones de inserción y extracción",
        "definition": "Las operaciones primitivas que definen el comportamiento de las estructuras lineales. Push/Enqueue: insertar un nuevo elemento. Pop/Dequeue: extraer y retornar el elemento según la política de la estructura (LIFO o FIFO). Peek/Front: consultar el próximo elemento sin extraerlo.",
        "example": "En el sistema de deshacer (Ctrl+Z) de un editor de código, cada acción del usuario realiza un 'push' sobre la pila de historial, y Ctrl+Z ejecuta un 'pop' para revertir la última acción."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Conceptos de desbordamiento (Overflow / Underflow)",
        "definition": "Stack Overflow: condición de error cuando se intenta insertar (push) en una pila que ya alcanzó su capacidad máxima. Stack Underflow: condición de error cuando se intenta extraer (pop) de una pila o cola vacía. Ambos deben manejarse con validaciones previas.",
        "example": "Una función recursiva infinita sin caso base provoca un Stack Overflow al llenar el call stack del sistema con frames de activación hasta agotar la memoria reservada para la pila."
      },
      {
        "term": "Aplicaciones prácticas y complejidad temporal O(1)",
        "definition": "La complejidad temporal O(1) constante de push/pop y enqueue/dequeue hace estas estructuras indispensables en sistemas de alto rendimiento. Aplicaciones: call stacks, evaluadores de expresiones, parsers, colas de trabajos en servidores, buffers de red y algoritmos DFS/BFS.",
        "example": "Un servidor web usa una cola de tareas FIFO para gestionar las peticiones HTTP recibidas, asegurando que sean procesadas en orden de llegada y que ninguna petición sea ignorada bajo alta carga."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Colas FIFO vs Pilas LIFO: políticas y aplicaciones",
        "definition": "La diferencia fundamental entre ambas estructuras radica en su política de acceso: FIFO (First In, First Out) en Colas preserva el orden de llegada, ideal para sistemas de procesamiento justo y ordenado. LIFO (Last In, First Out) en Pilas invierte el orden, ideal para deshacer acciones y evaluación de expresiones.",
        "example": "Usar una Cola FIFO para gestionar los trabajos de impresión en una impresora de red (el primer documento enviado es el primero en imprimirse) y una Pila LIFO para implementar el botón de 'Deshacer' en un editor de texto."
      }
    ],
    "quiz": {
      "question": "Un sistema de gestión de tareas para un servidor de IA recibe solicitudes de inferencia de múltiples clientes simultáneamente y debe procesarlas en el orden exacto en que llegaron para garantizar equidad. ¿Qué estructura de datos lineal debes implementar y por qué?",
      "options": [
        "Una Pila (Stack - LIFO), porque así la última solicitud recibida es procesada primero, optimizando la latencia del cliente más reciente.",
        "Una Cola (Queue - FIFO), porque la política First In, First Out garantiza que la primera solicitud de inferencia recibida sea la primera en procesarse, asegurando equidad y el orden de llegada.",
        "Una matriz bidimensional 3x3, porque permite organizar las solicitudes por prioridad y hora del día.",
        "Un árbol binario de búsqueda ordenado por timestamp, porque las operaciones de inserción y búsqueda son O(log n)."
      ],
      "answer": 1,
      "explanation": "Correcto. La Cola (Queue) con política FIFO es la estructura adecuada para sistemas donde el orden de llegada debe ser respetado estrictamente (fairness). La primera solicitud en llegar al servidor es la primera en ser atendida y procesada, independientemente de quién sea el cliente. Esto evita starvation (inanición) de clientes que llegaron antes pero podrían ser desplazados por una pila LIFO que privilegiaría siempre al último."
    }
  },
  {
    "id": 42,
    "subarea": "Programación",
    "nivel": "Undécimo",
    "ra": "14. Emplear los grafos y árboles como estructura de datos.",
    "il": "14.1 Utiliza árboles y sus características como estructura de datos en la resolución de problemas específicos.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Estructuras de datos no lineales",
        "definition": "Estructuras de datos jerárquicas o interconectadas donde un elemento puede enlazarse con múltiples elementos siguientes o anteriores, superando el flujo secuencial lineal. Las dos clases principales son los Árboles y los Grafos.",
        "example": "Modelar el sistema de archivos de un sistema operativo Linux como una estructura de directorios anidados con relaciones de padre-hijo."
      },
      {
        "term": "Árboles binarios",
        "definition": "Estructuras de datos jerárquicas formadas por nodos, comenzando por un nodo raíz. Cada nodo puede tener como máximo dos hijos (izquierdo y derecho). Se utilizan para búsquedas rápidas (Árboles Binarios de Búsqueda - BST) y estructuras de decisión.",
        "example": "Implementar un BST para buscar IDs de usuarios, donde los menores al nodo actual van a la izquierda y los mayores a la derecha, logrando búsquedas en complejidad O(log n)."
      },
      {
        "term": "Grafos",
        "definition": "Estructuras de datos compuestas por un conjunto de Vértices (nodos) y un conjunto de Aristas (enlaces o conexiones) que representan relaciones de conectividad arbitrarias entre ellos. Pueden ser dirigidos/no dirigidos y pesados/no pesados.",
        "example": "Modelar una red de computadoras donde cada servidor es un vértice y las conexiones físicas de red con su respectivo ancho de banda son aristas con pesos."
      },
      {
        "term": "Recorridos de árboles y aplicaciones lógicas",
        "definition": "Algoritmos sistemáticos para visitar cada nodo de un árbol exactamente una vez. Los tres recorridos de profundidad principales son Preorden, Inorden (retorna un BST ordenado) y Postorden (útil para eliminar subárboles y evaluar expresiones polacas invertidas).",
        "example": "Usar el recorrido Inorden sobre un árbol binario de búsqueda para imprimir la lista de notas de los alumnos en orden estrictamente ascendente."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Estructura de nodos y apuntadores",
        "definition": "La representación física de estructuras de datos en memoria, donde cada Nodo es un objeto o estructura que contiene el valor del dato y uno o más Apuntadores (referencias de memoria) que apuntan a la ubicación física de otros nodos.",
        "example": "Definir un nodo de árbol binario en C++ o Python como un objeto que tiene tres atributos: 'valor', 'izquierdo' (apuntador a otro nodo) y 'derecho' (apuntador a otro nodo)."
      },
      {
        "term": "Recorridos en árboles (Preorden, Inorden, Postorden)",
        "definition": "Estrategias de búsqueda recursivas en profundidad. Preorden: raíz -> izquierdo -> derecho (copiar árboles). Inorden: izquierdo -> raíz -> derecho (ordenamiento). Postorden: izquierdo -> derecho -> raíz (liberación de memoria y evaluación sintáctica).",
        "example": "El compilador utiliza el recorrido Postorden sobre el árbol de sintaxis abstracta (AST) de la expresión matemática '3 + 5 * 2' para evaluar las operaciones en el orden correcto de precedencia."
      },
      {
        "term": "Matrices de adyacencia y listas de adyacencia para grafos",
        "definition": "Formas de representar un grafo en código. Matriz de Adyacencia: matriz de V x V donde la celda [i][j] es 1 (o el peso de la arista) si existe conexión. Lista de Adyacencia: arreglo de tamaño V donde cada posición contiene una lista de los nodos vecinos conectados.",
        "example": "Usar una Lista de Adyacencia para grafos dispersos con millones de usuarios (red social) para ahorrar memoria, evitando la matriz gigante de millones x millones llena de ceros."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Estructuras no lineales complejas, Árboles Binarios de Búsqueda y jerarquías de nodos",
        "definition": "El entendimiento profundo de la organización jerárquica de datos en árboles (nodos raíz, padre, hijo, hojas, niveles) y grafos, y la lógica matemática detrás de las búsquedas y ordenamientos eficientes en Árboles Binarios de Búsqueda.",
        "example": "Identificar el nodo raíz de un árbol genealógico, calcular la altura total de la jerarquía y determinar qué elementos representan nodos hoja (sin hijos)."
      }
    ],
    "quiz": {
      "question": "En Ciencias de la Computación, tienes un Árbol Binario de Búsqueda (BST) que almacena calificaciones numéricas de estudiantes. Si deseas imprimir todas las notas almacenadas en orden estrictamente ascendente (de menor a mayor), ¿qué algoritmo de recorrido debes ejecutar sobre el árbol?",
      "options": [
        "Debes realizar un recorrido Preorden (raíz, izquierdo, derecho).",
        "Debes realizar un recorrido Inorden (izquierdo, raíz, derecho).",
        "Debes realizar un recorrido Postorden (izquierdo, derecho, raíz).",
        "Debes usar una matriz de adyacencia y realizar una transposición matricial lineal."
      ],
      "answer": 1,
      "explanation": "Correcto. El recorrido Inorden (izquierdo -> raíz -> derecho) sobre un Árbol Binario de Búsqueda (BST) tiene la propiedad matemática de visitar los nodos en orden estrictamente ascendente. Esto se debe a que la estructura del BST garantiza que todos los elementos menores al nodo actual se encuentran en su subárbol izquierdo, y todos los mayores en su subárbol derecho."
    }
  },
  {
    "id": 43,
    "subarea": "Programación",
    "nivel": "Undécimo",
    "ra": "15. Utilizar algoritmos para inteligencia artificial para la resolución de problemas.",
    "il": "15.1 Soluciona problemas utilizando algoritmos de búsqueda, métodos iterativos, heurísticos, metaheurística, evolutiva y genéticos, usando técnicas de programación para inteligencia artificial",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Algoritmos de IA",
        "definition": "Algoritmos de computación diseñados para resolver problemas complejos imitando procesos cognitivos humanos, tales como la toma de decisiones, el aprendizaje, la optimización metaheurística y la búsqueda inteligente en espacios de estados masivos.",
        "example": "Programar el motor de recomendación de una plataforma de streaming que aprende los gustos del usuario mediante filtrado colaborativo."
      },
      {
        "term": "Búsquedas ciegas y heurísticas",
        "definition": "Búsquedas Ciegas (no informadas): exploran el espacio de estados sin información previa del costo hacia la meta (ej. BFS, DFS). Búsquedas Heurísticas (informadas): utilizan una función de estimación (heurística) para guiar la búsqueda hacia la meta de forma más directa y eficiente.",
        "example": "El GPS de un coche utiliza una búsqueda heurística con la distancia en línea recta hacia el destino para calcular la ruta más rápida sin explorar todas las calles posibles del mapa."
      },
      {
        "term": "Algoritmos genéticos",
        "definition": "Algoritmos de optimización metaheurística inspirados en el proceso de selección natural de Darwin. Evalúan una población de soluciones candidatas que evolucionan a lo largo de generaciones mediante selección, cruzamiento cromosómico y mutación aleatoria.",
        "example": "Optimizar la distribución física de componentes electrónicos en una placa de circuito impreso para minimizar el calentamiento usando un algoritmo genético."
      },
      {
        "term": "Computación evolutiva",
        "definition": "Subcampo de la Inteligencia Artificial que engloba algoritmos de optimización basados en los principios de la evolución biológica (genéticos, programación evolutiva, estrategias evolutivas) para resolver problemas combinatorios altamente complejos.",
        "example": "Diseñar la estructura aerodinámica de un prototipo de ala de avión dejando que un algoritmo evolutivo altere y pruebe formas geométricas en un túnel de viento virtual."
      },
      {
        "term": "Optimización matemática",
        "definition": "La selección del mejor elemento (con respecto a algún criterio) a partir de un conjunto de alternativas disponibles. Consiste en maximizar o minimizar una función objetivo real mediante la selección sistemática de valores de variables dentro de rangos permitidos.",
        "example": "Minimizar los costos de combustible de una flota de camiones de reparto ajustando las variables de asignación de rutas bajo restricciones de tiempo de entrega."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Búsqueda primero en anchura (BFS) y en profundidad (DFS)",
        "definition": "BFS (Breadth-First Search): explora nivel por nivel usando una cola FIFO, garantizando encontrar el camino más corto en grafos no pesados. DFS (Depth-First Search): explora a lo profundo usando una pila LIFO (o recursividad), ideal para recorrer todo el grafo y detectar ciclos.",
        "example": "Usar BFS para encontrar el menor número de saltos entre dos personas en una red social, y usar DFS para verificar si existe algún bucle cerrado en una red de tuberías."
      },
      {
        "term": "Algoritmo A*",
        "definition": "Algoritmo de búsqueda de caminos en grafos de complejidad optimizada que encuentra el camino más corto combinando el costo real del camino recorrido g(n) y el costo estimado heurístico hacia la meta h(n) (f(n) = g(n) + h(n)).",
        "example": "El algoritmo de pathfinding de un personaje en un videojuego utiliza A* para rodear obstáculos en tiempo real y dirigirse al punto indicado por el jugador."
      },
      {
        "term": "Funciones de aptitud (fitness)",
        "definition": "La función matemática clave en los algoritmos genéticos y evolutivos que evalúa de forma cuantitativa qué tan buena o apta es cada solución candidata (individuo) de la población, determinando su probabilidad de sobrevivir y reproducirse.",
        "example": "En un algoritmo genético para diseñar rutas escolares, la función de aptitud calcula el inverso del tiempo total de viaje y los costos de gasolina (a menor tiempo y costo, mayor aptitud)."
      },
      {
        "term": "Mutación y cruce cromosómico",
        "definition": "Operadores genéticos que simulan la reproducción biológica. Cruce (Crossover): combina partes de la estructura de dos soluciones padre para generar hijos con características combinadas. Mutación: altera de forma aleatoria pequeños fragmentos del código genético del hijo para introducir diversidad y evitar mínimos locales.",
        "example": "En la optimización de un portafolio de inversión, el cruce combina acciones exitosas de dos portafolios padre, y la mutación cambia aleatoriamente una acción por otra nueva para explorar mercados alternativos."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Estrategias algorítmicas de IA: optimización heurística y metaheurística",
        "definition": "La capacidad de diseñar y seleccionar la estrategia algorítmica adecuada (búsquedas informadas, heurísticas de A*, o algoritmos evolutivos/genéticos) para encontrar soluciones de alta calidad en problemas NP-hard donde los algoritmos exactos son computacionalmente inviables.",
        "example": "Resolver el problema del agente viajero (TSP) para 500 ciudades usando algoritmos genéticos que convergen a una solución óptima en segundos en lugar de esperar años con fuerza bruta."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de un módulo de Inteligencia Artificial para el sistema de ruteo automático de paquetes de un courier, te encuentras con un problema de optimización combinatoria altamente complejo (NP-hard). ¿Qué tipo de estrategia algorítmica metaheurística debes implementar para encontrar una solución óptima o cercana a la óptima en pocos segundos y cómo funciona?",
      "options": [
        "Debes implementar una Búsqueda Ciega BFS exhaustiva que explore secuencialmente todas las combinaciones posibles de rutas en memoria RAM.",
        "Debes implementar un Algoritmo Genético (Optimización Metaheurística) que comience con una población de rutas aleatorias y las evoluches a través de generaciones mediante operadores de selección, cruce cromosómico y mutación aleatoria evaluados por una función de aptitud (fitness).",
        "Debes usar una consulta SQL con la cláusula HAVING para que el motor de base de datos relacional resuelva la optimización combinatoria.",
        "Debes codificar una función recursiva en C++ sin caso base para que use toda la potencia de la CPU."
      ],
      "answer": 1,
      "explanation": "Correcto. Los problemas de optimización combinatoria NP-hard (como el diseño de rutas óptimas para múltiples camiones) no pueden resolverse en tiempo razonable de forma exacta (búsqueda ciega) a gran escala. Un Algoritmo Genético es una metaheurística evolutiva de alta eficiencia: crea una población de soluciones, y mediante cruzamientos y mutaciones guiadas por una función de fitness, converge a soluciones excelentes en un tiempo de cómputo extremadamente corto."
    }
  },
  {
    "id": 44,
    "subarea": "Programación",
    "nivel": "Duodécimo",
    "ra": "16. Emplear los conceptos de la programación para visión por computadora en inteligencia artificial.",
    "il": "16.1 Reconoce la óptica, cámaras digitales, imágenes digitales, mapeo de colores, conversiones de colores, espacios de color, como elementos de la visión por computadora.",
    "cant_items": "2",
    "saberes_iniciales": [
      {
        "term": "Visión por Computadora",
        "definition": "Disciplina científica de la Inteligencia Artificial que desarrolla métodos para que las computadoras puedan procesar, analizar y comprender imágenes digitales, videos y datos visuales del mundo real, extrayendo información estructurada de ellos.",
        "example": "Implementar un sistema de visión artificial en una cámara de seguridad que detecta automáticamente si las personas llevan puesto el casco de seguridad en una obra en construcción."
      },
      {
        "term": "Procesamiento digital de imágenes",
        "definition": "La manipulación matemática y algorítmica de imágenes digitales para mejorar su calidad visual, destacar características específicas, eliminar ruido o preparar los datos cromáticos como fase previa para alimentar un modelo de visión artificial.",
        "example": "Aplicar un filtro de suavizado a una radiografía digital para reducir el ruido granulado y facilitar la detección de fisuras óseas por un algoritmo de IA."
      },
      {
        "term": "Espacios de color (RGB, HSV, escala de grises)",
        "definition": "Modelos matemáticos para representar los colores como tuplas de números. RGB: aditivo basado en tres canales (Rojo, Verde, Azul), sensible a variaciones de iluminación. HSV: separa Tonalidad (Hue), Saturación (Saturation) y Valor/Brillo (Value), ideal para segmentación por color bajo iluminación variable. Escala de grises: un solo canal de luminosidad.",
        "example": "Convertir una imagen de entrada de la cámara de RGB a HSV para segmentar con precisión un objeto de color naranja brillante, independientemente de si hay sombras en la escena."
      },
      {
        "term": "Sensores ópticos",
        "definition": "Los dispositivos de hardware (cámaras, sensores CCD/CMOS, sensores infrarrojos, cámaras térmicas) que capturan la luz y la radiación electromagnética reflejada por el entorno y la convierten en señales eléctricas digitales que representan una imagen.",
        "example": "Instalar una cámara CMOS con filtro infrarrojo para capturar imágenes claras de la patente de vehículos en un peaje automático durante la noche profunda."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Filtros de imagen (convoluciones)",
        "definition": "Operación matemática matricial que aplica una matriz pequeña (núcleo o Kernel) sobre cada región de la imagen original. Multiplica los píxeles vecinos por los pesos del kernel y los suma para producir un nuevo píxel, logrando efectos como desenfoque, enfoque o detección de bordes.",
        "example": "Aplicar un kernel de Gauss de 5x5 mediante convolución para desenfocar y suavizar los bordes de una imagen antes de realizar operaciones de detección de contornos."
      },
      {
        "term": "Detección de bordes (Canny/Sobel)",
        "definition": "Algoritmos clásicos de visión computacional que localizan los puntos de una imagen digital donde la intensidad luminosa cambia bruscamente (gradiente de intensidad alto). El operador Sobel aproxima las derivadas espaciales de la imagen. El algoritmo de Canny aplica reducción de ruido, cálculo de gradientes y supresión de no máximos para extraer líneas limpias.",
        "example": "Usar el algoritmo de Canny en OpenCV para extraer las líneas de carril de la carretera en el sistema de asistencia a la conducción de un vehículo autónomo."
      },
      {
        "term": "Histogramas de color y transformaciones geométricas de imagen",
        "definition": "Histograma de Color: representación gráfica de la distribución de frecuencias de los niveles de intensidad de píxeles en los canales de color. Transformaciones Geométricas: operaciones de redimensionamiento (resize), rotación, traslación y transformaciones afines de la matriz de píxeles.",
        "example": "Analizar el histograma del canal de brillo 'V' de una imagen HSV para evaluar si la imagen está subexpuesta (demasiado oscura) y aplicar una ecualización del histograma para corregir la iluminación."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Procesamiento digital de imágenes en visión artificial y espacios de color",
        "definition": "El conocimiento aplicado de los espacios de color (RGB, HSV, escala de grises) y los flujos de preprocesamiento de imágenes (conversiones cromáticas, transformaciones espaciales, histogramas) para optimizar la ingesta de datos en sistemas de visión por computadora.",
        "example": "Diseñar un pipeline en el que un video de seguridad se convierte a escala de grises para reducir a la tercera parte el peso de los datos y acelerar la inferencia en un detector de rostros."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de un sistema de visión artificial para clasificar frutas en una banda transportadora industrial con iluminación variable, ¿por qué es técnicamente preferible convertir las imágenes de entrada del espacio de color RGB al espacio de color HSV para segmentar la fruta por su color?",
      "options": [
        "El espacio de color RGB consume el triple de memoria RAM en comparación con HSV para cualquier tipo de imagen.",
        "El espacio de color RGB mezcla la información del color (crominancia) con la intensidad de la luz (luminancia) en sus tres canales. El espacio HSV aísla la tonalidad pura en el canal 'H' (Hue) y el brillo en el canal 'V' (Value), permitiendo segmentar el color de forma robusta e independiente de los cambios e intensidad de la iluminación en la fábrica.",
        "HSV comprime automáticamente la imagen a formato JPG para eliminar la necesidad de preprocesamiento.",
        "La conversión a HSV elimina la necesidad de engranajes y ventaja mecánica en el motor de la banda transportadora."
      ],
      "answer": 1,
      "explanation": "Correcto. En visión computacional, RGB es altamente inestable ante variaciones de iluminación porque una sombra o reflejo altera los valores de R, G y B simultáneamente. En cambio, HSV separa el color puro de la luz: el canal H (Hue) representa el tono exacto (rojo, verde, etc.), la S es la saturación, y la V es el brillo. Al ignorar las variaciones del canal V, se puede segmentar un color específico de manera confiable aunque cambie la luz."
    }
  },
  {
    "id": 45,
    "subarea": "Programación",
    "nivel": "Duodécimo",
    "ra": "17. Utilizar la visión por computadora para resolver problemas.",
    "il": "17.1 Reconoce los pixeles, coordenadas y las imágenes como matrices multidimensionales.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Representación de imágenes",
        "definition": "El modelo de almacenamiento digital de las imágenes. Una imagen en escala de grises se representa como una matriz bidimensional de píxeles, donde cada celda contiene un valor de intensidad (usualmente de 0: negro a 255: blanco). Una imagen a color se representa como un tensor tridimensional (alto, ancho, canales).",
        "example": "Representar una imagen satelital de 1024x1024 píxeles a color en Python como una estructura de datos de dimensiones (1024, 1024, 3) que almacena los canales de color Rojo, Verde y Azul."
      },
      {
        "term": "Matrices multidimensionales (tensores)",
        "definition": "Estructuras de datos algebraicas de N dimensiones que almacenan valores numéricos homogéneos del mismo tipo. En visión computacional y aprendizaje profundo, las imágenes y videos se procesan y manipulan matemáticamente como tensores numéricos optimizados para operaciones en GPU.",
        "example": "Un lote (batch) de 32 imágenes a color para entrenar una red neuronal convolucional se modela como un tensor de 4 dimensiones: (32, 224, 224, 3)."
      },
      {
        "term": "Manipulación de píxeles",
        "definition": "La edición o consulta directa de los valores numéricos almacenados en posiciones específicas de los índices de la matriz o tensor de una imagen, modificando los niveles de color o intensidad en coordenadas individuales [fila][columna][canal].",
        "example": "Pintar un rectángulo negro de censura sobre una imagen modificando los valores del rango de píxeles [100:200, 150:250] del tensor para forzarlos a valer 0."
      },
      {
        "term": "Librerías avanzadas (OpenCV/NumPy)",
        "definition": "OpenCV (Open Source Computer Vision Library): la librería estándar de facto en la industria para el procesamiento de imágenes y video en tiempo real. NumPy: la librería de computación científica de Python que gestiona las imágenes internamente como arreglos multidimensionales (ndarrays) hiper-eficientes en C.",
        "example": "Cargar una imagen usando 'cv2.imread()', que automáticamente retorna un array multidimensional de NumPy, y utilizar slicing para recortar una región de interés en microsegundos."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Slicing y operaciones matriciales con arreglos multidimensionales",
        "definition": "El Slicing es la técnica de extraer subsecciones (regiones de interés - ROI) de un tensor o matriz especificando rangos de índices (ej. 'imagen[y:y+h, x:x+w]'). Las operaciones matriciales multiplican, suman o escalan tensores de forma vectorizada sin usar bucles for lentos.",
        "example": "Incrementar el contraste de una imagen aplicando la operación vectorizada 'imagen = imagen * 1.5' en NumPy, que multiplica todos los millones de píxeles en paralelo a nivel de CPU/C."
      },
      {
        "term": "Binarización (thresholding)",
        "definition": "Técnica de segmentación de imágenes que convierte una imagen en escala de grises en una imagen binaria (blanco y negro puro). Evalúa cada píxel contra un umbral: si es mayor que el umbral se convierte en 255 (blanco), de lo contrario en 0 (negro).",
        "example": "Aplicar el método de binarización adaptativa de Otsu en OpenCV para aislar el texto negro de una hoja de papel escaneada, ignorando las sombras e imperfecciones del fondo gris."
      },
      {
        "term": "Segmentación de objetos y extracción de características",
        "definition": "Segmentación: proceso de particionar una imagen digital en múltiples regiones o conjuntos de píxeles basados en características comunes (color, bordes). Extracción de Características: identificación de puntos clave, contornos o descriptores visuales útiles para reconocimiento por IA.",
        "example": "Extraer los contornos exteriores de botellas en una línea de producción usando 'cv2.findContours()' sobre la imagen binarizada para medir su altura exacta y detectar botellas mal llenadas."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Representación de imágenes digitales como matrices bidimensionales y tensores numéricos",
        "definition": "La comprensión matemática de que una imagen digital no es más que una matriz o tensor numérico. Esto permite aplicar álgebra lineal básica (multiplicaciones, reescalados, filtrado matricial) directamente sobre los píxeles utilizando librerías como NumPy para alterar su apariencia y características físicas.",
        "example": "Calcular la resolución total en píxeles y el tamaño en bytes de una matriz bidimensional de escala de grises de dimensiones 200x200 (exactamente 40,000 píxeles, equivalente a 40 KB de datos sin comprimir en formato de 8 bits)."
      }
    ],
    "quiz": {
      "question": "En Python, estás utilizando la librería OpenCV para preprocesar imágenes y lees una imagen de resolución 200x200 píxeles en escala de grises. ¿Cómo representa internamente esta imagen la computadora en memoria RAM y cuántos píxeles en total contiene?",
      "options": [
        "La representa como una lista encadenada de 40,000 nodos apuntados secuencialmente y requiere conversión a binario.",
        "La representa como una matriz bidimensional de NumPy (ndarray) con dimensiones exactas de (200, 200) que contiene un total de 40,000 píxeles individuales, donde cada elemento almacena un valor de intensidad luminosa de 8 bits (de 0 a 255).",
        "La representa como un tensor de 4 dimensiones (200, 200, 3, 1) compatible con sistemas de audio digital.",
        "La representa como una base de datos relacional de una sola tabla con 200 filas y 200 columnas indexadas en base 1."
      ],
      "answer": 1,
      "explanation": "Correcto. En OpenCV y NumPy, una imagen en escala de grises se representa exactamente como una matriz bidimensional (ndarray de NumPy) de dimensiones (alto, ancho). Una imagen de 200x200 píxeles contiene exactamente 40,000 píxeles (200 * 200). Cada píxel almacena un entero sin signo de 8 bits (uint8) cuyos valores numéricos van de 0 (negro absoluto) a 255 (blanco absoluto)."
    }
  },
  {
    "id": 46,
    "subarea": "Programación",
    "nivel": "Duodécimo",
    "ra": "18. Aplica los conceptos básicos del lenguaje natural para inteligencia artificial.",
    "il": "18.1 Aplica expresiones regulares, operadores asociados, autónomas finitas, lenguajes regulares, morfologías, técnicas de procesamiento y N-gramas utilizando librerías de programación especializadas.",
    "cant_items": "1",
    "saberes_iniciales": [
      {
        "term": "Procesamiento de Lenguaje Natural (PLN/NLP)",
        "definition": "Campo interdisciplinario de la Inteligencia Artificial y la lingüística computacional que desarrolla algoritmos para permitir que las computadoras comprendan, analicen, interpreten y generen lenguaje humano de forma natural y contextualizada.",
        "example": "Desarrollar un clasificador de sentimiento para comentarios en redes sociales que cataloga las opiniones de los usuarios como positivas, negativas o neutras."
      },
      {
        "term": "Expresiones regulares",
        "definition": "Secuencias de caracteres que definen un patrón de búsqueda de texto abstracto y formalizado. Son herramientas de alto rendimiento para buscar, validar, extraer o reemplazar subcadenas específicas dentro de bloques de texto complejos.",
        "example": "Usar la expresión regular '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' para validar que una dirección de correo electrónico introducida en un formulario sea sintácticamente válida."
      },
      {
        "term": "Autómatas finitos",
        "definition": "Modelos matemáticos de computación que consisten en un conjunto finito de estados, transiciones entre ellos y entradas de texto. Son la base formal en la que se sustentan los motores de búsqueda de expresiones regulares y los analizadores léxicos de compiladores.",
        "example": "Diseñar un autómata finito que transiciona del estado 'No-Autenticado' al estado 'Autenticado' solo al recibir la secuencia correcta de tokens de seguridad."
      },
      {
        "term": "Tokenización",
        "definition": "La fase inicial de procesamiento en NLP que consiste en dividir un flujo de texto continuo (un párrafo o documento) en unidades mínimas con significado llamadas tokens (palabras, subpalabras, signos de puntuación o caracteres).",
        "example": "Tokenizar el string 'La IA es el futuro.' en la lista de tokens individuales: ['La', 'IA', 'es', 'el', 'futuro', '.']."
      },
      {
        "term": "Lematización",
        "definition": "Proceso lingüístico avanzado que consiste en reducir las palabras flexionadas, conjugadas o derivadas a su forma base, canónica y de diccionario llamada lema (ej. comiendo, comió, comeremos -> comer; gatos -> gato). Requiere análisis morfológico contextual.",
        "example": "Lematizar la frase 'Los perros corrían velozmente' a sus lemas correspondientes: ['el', 'perro', 'correr', 'velozmente'] para estandarizar el análisis de texto."
      },
      {
        "term": "Modelos N-gramas",
        "definition": "Modelos probabilísticos de lenguaje que analizan y predicen la probabilidad de aparición de una palabra basándose en las N-1 palabras anteriores del texto. Un Bigrama analiza pares de palabras consecutivas; un Trigrama analiza grupos de tres.",
        "example": "Usar un modelo de bigramas entrenado con novelas para sugerir de forma predictiva la palabra más probable tras escribir 'Había una', sugiriendo con alta probabilidad 'vez'."
      }
    ],
    "saberes_complementarios": [
      {
        "term": "Eliminación de palabras vacías (stop words)",
        "definition": "La remoción selectiva de palabras extremadamente comunes en un idioma que aportan poco valor semántico para tareas de clasificación o minería de texto (artículos, preposiciones, pronombres como: 'el', 'la', 'un', 'y', 'de').",
        "example": "Limpiar el texto de un tweet eliminando las stop words para pasar de 'La computadora es muy rápida y buena' a ['computadora', 'rápida', 'buena'], enfocando el análisis en términos clave."
      },
      {
        "term": "Etiquetado gramatical (POS tagging)",
        "definition": "Part-Of-Speech Tagging. Algoritmo lingüístico que analiza un token dentro de una oración y determina su categoría gramatical correspondiente (sustantivo, verbo, adjetivo, adverbio) basándose en su definición y contexto de uso.",
        "example": "Etiquetar la palabra 'banco' en la frase 'Fui al banco a depositar' como un sustantivo de lugar, y en 'Yo banco esta idea' como una conjugación del verbo bancar."
      },
      {
        "term": "Bolsas de palabras (Bag of Words)",
        "definition": "Modelo simplificado de representación de texto usado en NLP. Representa un documento como un vector numérico de la frecuencia de aparición de sus palabras, ignorando por completo la gramática, el orden de las palabras y su estructura sintáctica.",
        "example": "Representar el documento 'Hola mundo, hola' como el diccionario de frecuencias {'hola': 2, 'mundo': 1}, sirviendo de entrada para modelos de clasificación sencillos."
      },
      {
        "term": "TF-IDF y librerías NLTK o Spacy",
        "definition": "TF-IDF (Term Frequency-Inverse Document Frequency): medida estadística que evalúa qué tan importante es una palabra para un documento específico dentro de una colección completa de documentos. NLTK y SpaCy son librerías de Python líderes para implementar todo el pipeline de NLP.",
        "example": "Utilizar la librería SpaCy en Python para tokenizar, lematizar, clasificar entidades nombradas (NER) y calcular vectores TF-IDF de un corpus de 1,000 noticias en español."
      }
    ],
    "conceptos_evaluados": [
      {
        "term": "Filtros con expresiones regulares en Python para extracción de patrones de texto",
        "definition": "El diseño e implementación de patrones de expresiones regulares mediante el módulo 're' de Python para identificar y extraer datos estructurados de flujos de texto plano sin estructurar (ej. emails, números de teléfono, URLs).",
        "example": "Usar 're.findall(r\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\", texto)' para extraer automáticamente todas las direcciones de correo electrónico presentes en un log de logs."
      },
      {
        "term": "Secuencia lógica de PLN de extremo a extremo: Recolección -> Limpieza y Normalización -> Vectores/Embeddings -> Entrenamiento",
        "definition": "El pipeline de ingeniería estándar para resolver problemas con lenguaje natural: recopilar el corpus de datos crudos -> normalizar y limpiar el texto (tokenizar, remover stop words, lematizar) -> vectorizar el texto (convertir palabras a vectores numéricos densos/embeddings) -> entrenar el clasificador de ML.",
        "example": "Construir un clasificador de spam recolectando emails, limpiándolos con SpaCy, representándolos como embeddings vectoriales y entrenando un modelo de red neuronal."
      }
    ],
    "quiz": {
      "question": "En el desarrollo de un pipeline de Procesamiento de Lenguaje Natural (PLN) para entrenar un clasificador de intenciones de un chatbot corporativo, recibes las consultas crudas de los clientes por chat. ¿Cuál es el orden secuencial correcto de preprocesamiento y entrenamiento que debes aplicar sobre el texto?",
      "options": [
        "Vectorización directa -> Entrenamiento del modelo -> Eliminación de stop words en producción -> Recopilación final.",
        "Recolección del corpus crudo -> Limpieza y Normalización lógica (Tokenización, eliminación de stop words, Lematización) -> Representación vectorial de texto (Embeddings/TF-IDF) -> Entrenamiento del modelo clasificador.",
        "Binarización por umbral -> Convolución de texto usando filtros Canny -> Detección de bordes gramaticales -> Guardado en formato BSON.",
        "Ejecución de un autómata finito de 8 estados para convertir todo el texto a lenguaje ensamblador."
      ],
      "answer": 1,
      "explanation": "Correcto. El procesamiento de lenguaje natural sigue un pipeline secuencial lógico riguroso: primero se recolecta el corpus de texto crudo; luego se limpia y normaliza (tokenizar para dividir en palabras, quitar stop words para eliminar ruido gramatical e irrelevante, y lematizar para reducir las formas flexionadas a su raíz común); posteriormente se vectoriza (transformando palabras en vectores numéricos legibles por algoritmos); y finalmente se alimenta y entrena el modelo de Machine Learning con estos vectores."
    }
  }
];

// ── Glosario Técnico Independiente ──────────────────────────────────────
// Sección de consulta libre para el estudiante, no vinculada a unidades.
const GLOSARIO_TECNICO = [
  {
    "categoria": "Arquitectura Web, Protocolos y Redes",
    "icono": "fa-network-wired",
    "color": "#6366f1",
    "terminos": [
      {
        "term": "W3C (World Wide Web Consortium)",
        "definition": "Consorcio internacional que desarrolla los estándares y pautas para garantizar el crecimiento a largo plazo de la Web (como HTML5, CSS y estándares de accesibilidad)."
      },
      {
        "term": "TCP/IP",
        "definition": "Conjunto de protocolos de red fundamentales que permiten la transmisión de datos entre computadoras. TCP divide la información en paquetes y garantiza su entrega; IP se encarga de direccionarlos al destino correcto."
      },
      {
        "term": "API (Application Programming Interface)",
        "definition": "Conjunto de reglas y definiciones que permite que diferentes aplicaciones de software se comuniquen e intercambien datos entre sí de forma estructurada."
      },
      {
        "term": "Frontend / Backend",
        "definition": "El Frontend es la capa del software que interactúa directamente con el usuario (interfaz visual), mientras que el Backend es la lógica del servidor, bases de datos y procesamiento que opera detrás de escena."
      },
      {
        "term": "Capa de Aplicación (Modelo OSI)",
        "definition": "El nivel superior del modelo de red OSI que interactúa directamente con los programas informáticos para proporcionar servicios de comunicación (por ejemplo, HTTP, FTP, SMTP)."
      },
      {
        "term": "gRPC",
        "definition": "Un framework de código abierto de alto rendimiento desarrollado por Google para llamadas a procedimientos remotos (RPC). Utiliza HTTP/2 para el transporte y Protocol Buffers para estructurar los datos, siendo mucho más rápido que REST clásico."
      },
      {
        "term": "HTTPS / TLS",
        "definition": "Protocolo seguro de transferencia de hipertexto cifrado mediante el protocolo criptográfico TLS (Transport Layer Security), encargado de asegurar que la comunicación en la web no sea interceptada ni alterada."
      },
      {
        "term": "PKI (Public Key Infrastructure)",
        "definition": "Sistema de funciones, políticas y procedimientos necesarios para crear, administrar, distribuir, usar, almacenar y revocar certificados digitales y gestionar la criptografía de clave pública."
      },
      {
        "term": "Canvas / WebGL",
        "definition": "Tecnologías web de renderizado. Canvas permite dibujar gráficos bidimensionales mediante scripts (JavaScript), mientras que WebGL es una API para renderizar gráficos 3D acelerados por hardware en el navegador."
      }
    ]
  },
  {
    "categoria": "Infraestructura Cloud y MLOps",
    "icono": "fa-cloud",
    "color": "#8b5cf6",
    "terminos": [
      {
        "term": "FastAPI",
        "definition": "Un framework web moderno, rápido (de alto rendimiento) y eficiente para construir APIs con Python, ampliamente utilizado para desplegar modelos de Machine Learning debido a su velocidad y tipado nativo."
      },
      {
        "term": "RESTful / Endpoints",
        "definition": "RESTful es un estilo arquitectónico para diseñar APIs basadas en el protocolo HTTP. Los Endpoints son las URLs o direcciones específicas donde una API recibe las solicitudes de datos."
      },
      {
        "term": "SPA (Single Page Application)",
        "definition": "Aplicación web que se carga en una sola página de navegador, actualizando dinámicamente el contenido mediante JavaScript en lugar de recargar toda la página desde el servidor (ej. React, Angular)."
      },
      {
        "term": "React",
        "definition": "Biblioteca de JavaScript de código abierto diseñada para crear interfaces de usuario interactivas y modulares en el Frontend."
      },
      {
        "term": "Streaming de tokens",
        "definition": "Técnica de transmisión de datos en tiempo real donde un modelo de lenguaje (como un LLM) envía cada palabra o fragmento de palabra (token) conforme lo va generando, en lugar de esperar a que la respuesta completa esté terminada."
      },
      {
        "term": "AWS S3 / Azure Blob Storage",
        "definition": "Servicios de almacenamiento en la nube de Amazon y Microsoft, respectivamente, optimizados para guardar cantidades masivas de datos no estructurados (imágenes, videos, datasets de entrenamiento) a gran escala."
      },
      {
        "term": "Kubernetes",
        "definition": "Plataforma de código abierto para la automatización del despliegue, el escalado y la gestión de aplicaciones en contenedores (software empaquetado con todas sus dependencias)."
      },
      {
        "term": "DAG (Directed Acyclic Graph)",
        "definition": "Estructura matemática y de datos compuesta por nodos conectados por aristas con una dirección específica, donde es imposible regresar al punto de partida siguiendo las flechas. Es la base de los historiales de Git y los pipelines de datos."
      },
      {
        "term": "IAM (Identity and Access Management)",
        "definition": "Marco de políticas y tecnologías de seguridad informática para garantizar que los usuarios y sistemas adecuados tengan el acceso apropiado a los recursos tecnológicos."
      }
    ]
  },
  {
    "categoria": "Inteligencia Artificial y Procesamiento de Datos",
    "icono": "fa-brain",
    "color": "#ec4899",
    "terminos": [
      {
        "term": "Modelos LLM (Large Language Models)",
        "definition": "Modelos de Inteligencia Artificial basados en redes neuronales profundas (arquitectura Transformer) entrenados con bases de datos de texto masivas para comprender, procesar y generar lenguaje humano."
      },
      {
        "term": "Redes Neuronales Convolucionales (CNN)",
        "definition": "Tipo de red neuronal profunda especialmente diseñada para procesar datos estructurados en cuadrículas, como imágenes, siendo la base del reconocimiento visual y la visión por computadora."
      },
      {
        "term": "Algoritmos CRDT / Operational Transformation (OT)",
        "definition": "Estructuras de datos y algoritmos avanzados diseñados para resolver conflictos en sistemas distribuidos. Permiten que múltiples usuarios editen el mismo documento en tiempo real de forma colaborativa (como en Google Docs)."
      },
      {
        "term": "Data Poisoning (Envenenamiento de datos)",
        "definition": "Un tipo de ciberataque contra sistemas de IA donde el atacante manipula maliciosamente el conjunto de datos de entrenamiento para que el modelo aprenda patrones erróneos o sesgados."
      },
      {
        "term": "Ataques Adversariales (Ejemplos Adversarios)",
        "definition": "Entradas (inputs) diseñadas sutilmente por un atacante con pequeñas perturbaciones matemáticas invisibles al ojo humano, con el objetivo de confundir por completo a un modelo de IA y hacer que falle en su predicción."
      },
      {
        "term": "Embeddings / TF-IDF",
        "definition": "Métodos para convertir texto en números. TF-IDF es una técnica estadística que mide la importancia de una palabra en un documento. Los Embeddings son representaciones matemáticas densas (vectores) que capturan el significado semántico y el contexto de las palabras en un espacio multidimensional."
      },
      {
        "term": "Lematización / Tokenización / Stop Words",
        "definition": "Procesos de limpieza de texto para IA. Tokenización es dividir el texto en palabras o subpalabras; Stop Words son palabras vacías sin peso semántico (como \"el\", \"de\", \"con\") que se eliminan; Lematización es reducir una palabra a su raíz lingüística formal (su lema)."
      }
    ]
  },
  {
    "categoria": "Sistemas Operativos, Hardware y Ciberseguridad",
    "icono": "fa-shield-alt",
    "color": "#f59e0b",
    "terminos": [
      {
        "term": "Syscalls (Llamadas al sistema)",
        "definition": "El mecanismo mediante el cual un programa de usuario solicita un servicio al núcleo (Kernel) del sistema operativo (por ejemplo, leer un archivo o reservar memoria)."
      },
      {
        "term": "Swap (Memoria de intercambio)",
        "definition": "Espacio en el disco de almacenamiento (SSD o HDD) que el sistema operativo utiliza como \"memoria RAM de respaldo\" cuando la memoria física real se ha agotado."
      },
      {
        "term": "OOM (Out Of Memory)",
        "definition": "Un estado o señal de error en el sistema operativo que ocurre cuando un programa o el sistema se queda sin memoria RAM disponible para seguir operando, lo que suele forzar el cierre repentino del proceso."
      },
      {
        "term": "Daemons (Demonios)",
        "definition": "Procesos de fondo en sistemas operativos (comunes en Unix/Linux) que se ejecutan de manera continua y sin intervención directa del usuario para atender solicitudes de servicios (como servidores web o cron jobs)."
      },
      {
        "term": "Systemd",
        "definition": "Un sistema de inicio y administrador de servicios para sistemas operativos basados en Linux que se encarga de arrancar y supervisar los procesos del sistema (daemons)."
      },
      {
        "term": "Permisos POSIX",
        "definition": "El estándar tradicional de control de acceso a archivos en sistemas operativos de la familia Unix/Linux que define reglas estrictas de lectura, escritura y ejecución (rwx) para el Propietario, el Grupo y Otros."
      },
      {
        "term": "APTs (Advanced Persistent Threats)",
        "definition": "Amenazas Avanzadas Persistentes; campañas de ciberataque prolongadas e hiperdirigidas, comúnmente ejecutadas por grupos respaldados por estados u organizaciones criminales de élite, cuyo objetivo es infiltrar sistemas y robar datos sin ser detectados durante mucho tiempo."
      },
      {
        "term": "Thermal Throttling (Estrangulamiento térmico)",
        "definition": "Mecanismo de seguridad de hardware donde procesadores (CPUs o GPUs) reducen automáticamente su velocidad de reloj y rendimiento cuando alcanzan temperaturas críticas para evitar daños físicos por calor."
      },
      {
        "term": "NVMe (Non-Volatile Memory Express)",
        "definition": "Un protocolo de transporte y acceso a almacenamiento de alta velocidad diseñado específicamente para unidades de estado sólido (SSD) conectadas mediante líneas PCIe, reduciendo drásticamente la latencia en comparación con discos antiguos."
      }
    ]
  },
  {
    "categoria": "Negocios y Métricas SaaS",
    "icono": "fa-chart-line",
    "color": "#10b981",
    "terminos": [
      {
        "term": "SaaS (Software as a Service)",
        "definition": "Modelo de distribución de software donde el soporte y los datos se alojan en servidores de una compañía de TIC y el cliente accede a ellos a través de internet (pago por suscripción)."
      },
      {
        "term": "Early Adopters",
        "definition": "Los primeros clientes de un producto o tecnología en el mercado. Suelen ser más tolerantes a los fallos iniciales del software y proporcionan retroalimentación crítica para refinar el MVP."
      },
      {
        "term": "CAC (Customer Acquisition Cost)",
        "definition": "Costo de Adquisición de Clientes; la inversión financiera total (márquetin, ventas, sueldos) requerida para convencer a un cliente potencial de comprar un producto o servicio."
      },
      {
        "term": "LTV (Lifetime Value)",
        "definition": "Valor del Ciclo de Vida del Cliente; una estimación de los ingresos netos totales que se proyecta que un solo cliente generará para la empresa durante todo el tiempo que dure su relación comercial."
      },
      {
        "term": "Churn Rate (Tasa de cancelación)",
        "definition": "El porcentaje de clientes o suscriptores que dejan de pagar o abandonan el servicio de la empresa durante un período de tiempo determinado."
      }
    ]
  }
];
