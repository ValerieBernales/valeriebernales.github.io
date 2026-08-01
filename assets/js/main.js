/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

})(jQuery);

/*Widget*/

  const CONTENT = {
    about: {
      title: 'About Me.txt',
      html: `
        <h4>About Me</h4>
        <p>Estudiante de Ingeniería Industrial y de Sistemas (UNAC), enfocada en análisis de datos y business intelligence.</p>
        <p><strong>Stack:</strong> SQL Server, Power BI, Python · SSIS, SSAS · Estadística aplicada</p>
      `
    },
    resume: {
      title: 'Resume.pdf',
      html: `
        <h4>Educación</h4>
        <ul class="mp-list">
          <li>Ingeniería Industrial y de Sistemas — UNAC</li>
          <li>Certificación DP-600 — Microsoft Fabric Analytics Engineer (en proceso)</li>
        </ul>
      `
    },
    projects: {
      title: 'Projects',
      html: `
        <div class="mp-grid">
          <div class="mp-card"><h5>Análisis de Datos</h5><p>Exploración y modelado de datos con SQL y Python.</p><span class="mp-tag">SQL</span><span class="mp-tag">Python</span></div>
          <div class="mp-card"><h5>Business Intelligence</h5><p>Dashboards e informes en Power BI.</p><span class="mp-tag">Power BI</span><span class="mp-tag">DAX</span></div>
        </div>
      `
    },
    skills: {
      title: 'Skills.exe',
      html: `
        <div class="mp-grid">
          <div class="mp-card"><h5>SQL Server</h5><p>Consultas y modelado de datos.</p></div>
          <div class="mp-card"><h5>Power BI</h5><p>Dashboards y DAX.</p></div>
          <div class="mp-card"><h5>Python</h5><p>Pandas, limpieza de datos.</p></div>
          <div class="mp-card"><h5>SSIS / SSAS</h5><p>Procesos ETL.</p></div>
        </div>
      `
    },
    contact: {
      title: 'Contact.txt',
      html: `
        <div class="mp-contact-item"><span>📧</span><span>tu-email@ejemplo.com</span></div>
        <div class="mp-contact-item"><span>💼</span><span>linkedin.com/in/valeriebernales</span></div>
      `
    },
    social: {
      title: 'Social Links',
      html: `
        <div class="mp-social">
          <a href="https://github.com/ValerieBernales" target="_blank">💻 github.com/ValerieBernales</a>
          <a href="https://www.linkedin.com/in/valeriebernales/" target="_blank">💼 linkedin.com/in/valeriebernales</a>
          <a href="https://www.instagram.com/karlaverie/" target="_blank">📷 instagram.com/karlaverie</a>
        </div>
      `
    }
  };

  const win = document.getElementById('mpWindow');
  const winTitle = document.getElementById('mpWinTitle');
  const winBody = document.getElementById('mpWinBody');
  const icons = document.querySelectorAll('.mp-icon');

  function openFile(fileKey, iconEl){
    const data = CONTENT[fileKey];
    if(!data) return;
    winTitle.textContent = data.title;
    winBody.innerHTML = data.html;
    win.classList.add('mp-open');
    icons.forEach(i => i.classList.remove('mp-active'));
    iconEl.classList.add('mp-active');
  }

  icons.forEach(icon=>{
    icon.addEventListener('click', ()=> openFile(icon.dataset.file, icon));
  });

  document.getElementById('mpClose').addEventListener('click', (e)=>{
    e.stopPropagation();
    win.classList.remove('mp-open');
  });

  document.getElementById("mpMinimize").addEventListener("click", () => {
    win.classList.remove("mp-open");
  });

  let maximized = false;

  document.getElementById("mpMaximize").addEventListener("click",()=>{
      win.classList.toggle("mp-maximized");
  });

  /*notificacion*/
    function showToast(type, message) {
        const toast = document.getElementById('toast');
        const icon = document.getElementById('toastIcon');
        const msg = document.getElementById('toastMessage');

        toast.className = 'toast ' + type;
        icon.textContent = type === 'success' ? '✓' : '✕';
        msg.textContent = message;

        void toast.offsetWidth; // fuerza el reinicio de la animación
        toast.classList.add('show');

        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const form = document.getElementById('contactForm');
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showToast('success', '¡Mensaje enviado! Te responderé pronto.');
                form.reset();
            } else {
                showToast('error', 'Hubo un error, intenta de nuevo.');
            }
        })
        .catch(() => {
            showToast('error', 'Hubo un error, intenta de nuevo.');
        });
    }, true);