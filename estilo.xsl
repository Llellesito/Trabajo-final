<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes" />

  <xsl:template match="/">
    <html>
      <head>
        <title>Jesús Franco</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="img/icono.png" type="image/x-icon" />
        <script src="scripts.js"></script>
      </head>

      <body>
        <header>
          <img class="avatar" src="../img/avatar.jpg" alt="" />
          <p> Jesús Franco <br /> Desarrollador web </p>
        </header>
        <!--MENUDE
        LA PAGINA-->
        <nav id="menu">
          <ul>
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="https://github.com/Llellesito/Trabajo-final" target="_blank">GitHub</a>
            </li>
          </ul>
        </nav>
        <!--MENU
        DE TEMAS-->
        <nav id="temas">
          <ul>
            <li onclick="temaPorDefecto()">Tema predeterminado</li>
            <li onclick="cambiarFondoHtml()">Tema oscuro</li>
            <li onclick="cambiarFondoHtmlAleatorio()">Tema aleatorio</li>
          </ul>
        </nav>
        <h2 style="text-align:center;">Proyectos</h2>

        <table class="XML">
          <tr>
            <th>Proyecto</th>
            <th>Descripción</th>
            <th>Enlaces</th>
          </tr>
          <xsl:for-each select="proyectos/proyecto">
            <tr>
              <td>
                <xsl:value-of select="nombre" />
              </td>
              <td>
                <xsl:value-of select="descripcion" />
              </td>
              <td>
                <a href="{enlace}" target="_blank">
                  <img class="proyecto_img" src="img/ver_proyecto.png" />
                </a>
              </td>
            </tr>
          </xsl:for-each>
        </table>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>