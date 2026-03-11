export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-vh-100 bg-light d-flex flex-column font-sans text-dark">
      
      {/* --- HEADER --- */}
      <header className="py-5 bg-white border-bottom shadow-sm position-relative z-1">
        <div className="container text-center">
          <h1 className="display-4 fw-bolder text-dark mb-3 tracking-tight">
            Bootstrap 5 <span className="text-primary">Master Showcase</span>
          </h1>
          <div className="mx-auto bg-primary-subtle rounded-4 p-4 border border-primary-subtle text-start mb-4 shadow-sm" style={{ maxWidth: '800px' }}>
            <h2 className="h5 fw-bold text-primary-emphasis mb-2">¿Por qué Bootstrap 5?</h2>
            <p className="text-dark mb-0" style={{ opacity: 0.85 }}>
              A diferencia de las utilidades de bajo nivel, Bootstrap ofrece un sistema robusto de <strong>componentes pre-construidos</strong>. En su versión 5.3, introduce el modo oscuro nativo, variables CSS globales, colores sutiles (subtle) y nuevas utilidades que modernizan por completo su aspecto clásico, ideal para construir paneles de administración e interfaces corporativas a gran velocidad.
            </p>
          </div>
          <p className="text-secondary fw-medium">30 Componentes · Sistema de Grillas · Bootstrap 5.3 Ready</p>
        </div>
      </header>

      {/* --- SHOWCASE GRID --- */}
      <main className="flex-grow-1 py-5">
        <div className="container-xl">
          <div className="row g-4">
            
            {/* 1. Botones */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">1. Botones (Buttons)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Llamadas a la acción.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> btn, btn-primary, btn-outline-*</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <div className="d-flex flex-wrap justify-content-center gap-2 w-100 p-3 bg-white rounded shadow-sm">
                    <button className="btn btn-primary shadow-sm"><i className="bi bi-send me-2"></i>Enviar</button>
                    <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    <button className="btn btn-success rounded-pill px-4 shadow-sm">Éxito</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Tarjetas */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">2. Tarjetas (Cards)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Contenedores de contenido y perfiles.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> card, card-body, card-title</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <div className="card shadow-sm border-0 w-100">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Angel Salguero</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Software Engineer</h6>
                      <p className="card-text small text-secondary">Construyendo interfaces robustas.</p>
                      <a href="#" onClick={(e) => e.preventDefault()} className="card-link text-decoration-none fw-bold">Ver perfil</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Alertas */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">3. Alertas (Alerts)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Notificaciones del sistema.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> alert, alert-warning</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-2">
                  <div className="alert alert-warning d-flex align-items-center w-100 mb-0 shadow-sm border-warning-subtle py-2 px-3" role="alert">
                    <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2 text-warning"></i>
                    <div className="small fw-bold text-warning-emphasis">Alerta de conexión</div>
                  </div>
                  <div className="alert alert-success d-flex align-items-center w-100 mb-0 shadow-sm border-success-subtle py-2 px-3" role="alert">
                    <i className="bi bi-check-circle-fill flex-shrink-0 me-2 text-success"></i>
                    <div className="small fw-bold text-success-emphasis">Guardado exitoso</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Badges (Insignias) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">4. Insignias (Badges)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Contadores y etiquetas de estado.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> badge, text-bg-primary, rounded-pill</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 gap-3">
                  <span className="badge text-bg-primary fs-6">Nuevo</span>
                  <span className="badge text-bg-success rounded-pill px-3 fs-6">Aprobado</span>
                  <button type="button" className="btn btn-dark position-relative shadow-sm">
                    Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Progress */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">5. Barras de Progreso</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Carga de archivos o pasos de formularios.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> progress, progress-bar-striped</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-3 px-4">
                  <div className="progress shadow-sm" style={{ height: '10px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '45%' }}></div>
                  </div>
                  <div className="progress shadow-sm" style={{ height: '15px' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '75%' }}>75%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Spinners */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">6. Indicadores (Spinners)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Espera de peticiones a la API.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> spinner-border, spinner-grow</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-evenly bg-dots m-3 rounded-3">
                  <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
                  <div className="spinner-grow text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
                  <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    <span role="status">Cargando...</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 7. List Group */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">7. Grupos de Listas</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Listas de tareas o navegación lateral.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> list-group, list-group-item</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <ul className="list-group w-100 shadow-sm">
                    <li className="list-group-item d-flex justify-content-between align-items-center active border-primary">
                      Bandeja de Entrada <span className="badge bg-light text-primary rounded-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Enviados <span className="badge bg-secondary rounded-pill">2</span>
                    </li>
                    <li className="list-group-item disabled" aria-disabled="true">Borradores</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. Floating Labels */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">8. Floating Labels</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Formularios modernos de Login.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> form-floating, form-control</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-2">
                  <div className="form-floating shadow-sm">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Correo electrónico</label>
                  </div>
                  <div className="form-floating shadow-sm">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Contraseña</label>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Input Groups */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">9. Input Groups</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Campos de búsqueda, precios o redes.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> input-group, input-group-text</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-3">
                  <div className="input-group shadow-sm">
                    <span className="input-group-text bg-white text-primary"><i className="bi bi-search"></i></span>
                    <input type="text" className="form-control border-start-0" placeholder="Buscar..." />
                  </div>
                  <div className="input-group shadow-sm">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" placeholder="Monto" />
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Switches & Checks */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">10. Switches & Checks</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Preferencias y configuraciones.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> form-check, form-switch</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-2 px-4">
                  <div className="form-check form-switch bg-white p-2 rounded shadow-sm border px-5">
                    <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                    <label className="form-check-label ms-2 small fw-bold" htmlFor="flexSwitchCheckChecked">Modo Oscuro</label>
                  </div>
                  <div className="form-check bg-white p-2 rounded shadow-sm border px-4">
                    <input className="form-check-input cursor-pointer" type="checkbox" id="flexCheckDefault" defaultChecked />
                    <label className="form-check-label ms-2 small" htmlFor="flexCheckDefault">Acepto los términos</label>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Validation States */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">11. Form Validation</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Feedback en tiempo real al usuario.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> is-valid, is-invalid, valid-feedback</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3">
                  <div className="bg-white p-3 rounded shadow-sm border w-100">
                    <input type="text" className="form-control is-valid mb-2" defaultValue="Angel" />
                    <input type="text" className="form-control is-invalid" placeholder="Apellido" />
                    <div className="invalid-feedback d-block small">El apellido es requerido.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 12. Tablas */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">12. Tablas (Tables)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Mostrar datos de bases de datos.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> table, table-striped, table-hover</p>
                </div>
                <div className="card-body d-flex align-items-center bg-dots m-3 rounded-3 p-0 overflow-hidden border">
                  <table className="table table-striped table-hover table-sm mb-0 bg-white">
                    <thead className="table-dark">
                      <tr><th scope="col">ID</th><th scope="col">Framework</th><th scope="col">V.</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">1</th><td>React</td><td>18</td></tr>
                      <tr><th scope="row">2</th><td>Bootstrap</td><td>5.3</td></tr>
                      <tr><th scope="row">3</th><td>Vite</td><td>5.0</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 13. Placeholders */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">13. Skeletons (Placeholders)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Pantallas de carga (Lazy loading).</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> placeholder-glow, placeholder</p>
                </div>
                <div className="card-body d-flex align-items-center bg-dots m-3 rounded-3">
                  <div className="w-100 bg-white p-3 rounded shadow-sm border">
                    <p className="placeholder-glow mb-2">
                      <span className="placeholder col-7 rounded bg-secondary"></span>
                    </p>
                    <p className="placeholder-glow mb-0">
                      <span className="placeholder col-4 rounded bg-primary me-2"></span>
                      <span className="placeholder col-6 rounded bg-info"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 14. Ratio */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">14. Aspect Ratio</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Contenedores fluidos para iFrames.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> ratio, ratio-16x9</p>
                </div>
                <div className="card-body d-flex align-items-center bg-dots m-3 rounded-3">
                  <div className="ratio ratio-16x9 w-100 rounded overflow-hidden shadow-sm border border-secondary">
                    <div className="bg-dark d-flex items-center justify-content-center text-white h-100 w-100 align-items-center">
                      <i className="bi bi-play-circle fs-1 opacity-75"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 15. Stacks */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">15. Stacks (Pilas Flex)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Alinear elementos rápidamente sin CSS extra.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> hstack, vstack, gap-3</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-3">
                  <div className="hstack gap-3 bg-white p-2 rounded shadow-sm border">
                    <div className="bg-light border px-2 py-1 rounded small">Item 1</div>
                    <div className="bg-light border px-2 py-1 rounded small">Item 2</div>
                    <div className="ms-auto bg-primary text-white px-2 py-1 rounded small">Auto Derecha</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 16. Navs & Tabs */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">16. Navs & Tabs</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Navegación interna de componentes.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> nav, nav-pills, nav-link</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3">
                  <div className="bg-white p-2 rounded shadow-sm border w-100">
                    <ul className="nav nav-pills nav-fill small">
                      <li className="nav-item"><a className="nav-link active py-1" aria-current="page" href="#" onClick={(e) => e.preventDefault()}>Activo</a></li>
                      <li className="nav-item"><a className="nav-link py-1" href="#" onClick={(e) => e.preventDefault()}>Link</a></li>
                      <li className="nav-item"><a className="nav-link disabled py-1" aria-disabled="true">Gris</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 17. Dropdowns (Estático) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">17. Dropdown Menu</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Menús contextuales o de usuario.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> dropdown-menu, dropdown-item</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <ul className="dropdown-menu show position-static shadow border-0 w-100">
                    <li><h6 className="dropdown-header">Opciones de Cuenta</h6></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-person me-2"></i>Perfil</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-gear me-2"></i>Ajustes</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-danger" href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-box-arrow-right me-2"></i>Salir</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 18. Modales (Estático) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">18. Modal (Diálogo)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Confirmaciones y formularios emergentes.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> modal-content, modal-header</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 p-2">
                  <div className="modal d-block position-static" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered m-0 w-100">
                      <div className="modal-content shadow border-0">
                        <div className="modal-header py-2 px-3">
                          <h5 className="modal-title fs-6 fw-bold">Confirmar</h5>
                          <button type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 small text-secondary">
                          ¿Deseas guardar los cambios?
                        </div>
                        <div className="modal-footer py-1 px-2 border-0">
                          <button type="button" className="btn btn-sm btn-secondary">No</button>
                          <button type="button" className="btn btn-sm btn-primary">Sí</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 19. Toasts (Estático) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">19. Toasts (Notificaciones)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Notificaciones push no intrusivas.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> toast, toast-header, toast-body</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <div className="toast show shadow border-0 w-100" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header border-bottom-0 pb-0">
                      <i className="bi bi-bootstrap-fill text-primary me-2"></i>
                      <strong className="me-auto">Bootstrap App</strong>
                      <small className="text-muted">Justo ahora</small>
                      <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="toast-body small text-secondary pt-1">
                      Tu proyecto se ha desplegado.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 20. Accordion (Estático) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">20. Accordion</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Preguntas frecuentes (FAQ) o paneles.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> accordion, accordion-button</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <div className="accordion w-100 shadow-sm border rounded overflow-hidden" id="accordionExample">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button py-2 fw-bold small" type="button" aria-expanded="true">
                          Panel Abierto
                        </button>
                      </h2>
                      <div className="accordion-collapse collapse show">
                        <div className="accordion-body small text-secondary py-2">
                          Contenido oculto revelado.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 21. Subtle Backgrounds (BS 5.3) */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">21. Subtle Colors (v5.3)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Fondos pastel modernos para UI limpia.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> bg-*-subtle, text-*-emphasis</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 gap-2 px-4">
                  <div className="p-2 bg-info-subtle text-info-emphasis rounded fw-bold text-center shadow-sm small border border-info-subtle">Info Subtle</div>
                  <div className="p-2 bg-danger-subtle text-danger-emphasis rounded fw-bold text-center shadow-sm small border border-danger-subtle">Danger Subtle</div>
                </div>
              </div>
            </div>

            {/* 22. Shadows */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">22. Sombras (Shadows)</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Dar profundidad a elementos flotantes.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> shadow-sm, shadow, shadow-lg</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 gap-3">
                  <div className="bg-white p-3 rounded shadow-sm fw-bold small">Small</div>
                  <div className="bg-white p-3 rounded shadow fw-bold small">Regular</div>
                  <div className="bg-white p-3 rounded shadow-lg fw-bold small text-primary">Large</div>
                </div>
              </div>
            </div>

            {/* 23. Object Fit */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">23. Object Fit</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Controlar cómo las imágenes llenan su caja.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> object-fit-cover</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 gap-2">
                  <div className="bg-white p-1 rounded shadow-sm border">
                    <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=200" className="object-fit-cover border rounded" alt="Cover" style={{width: '80px', height: '80px'}} />
                    <div className="text-center small mt-1 fw-bold">Cover</div>
                  </div>
                  <div className="bg-white p-1 rounded shadow-sm border">
                    <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=200" className="object-fit-contain border rounded" alt="Contain" style={{width: '80px', height: '80px', backgroundColor: '#e9ecef'}} />
                    <div className="text-center small mt-1 fw-bold">Contain</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 24. Position */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">24. Posicionamiento</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Centrar elementos absolutos fácilmente.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> position-absolute, translate-middle</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <div className="position-relative w-75 h-75 bg-white border rounded shadow-sm">
                    <div className="position-absolute top-0 start-0 translate-middle w-25 h-25 bg-primary rounded-circle shadow"></div>
                    <div className="position-absolute top-50 start-50 translate-middle w-25 h-25 bg-danger rounded-circle shadow"></div>
                    <div className="position-absolute top-100 start-100 translate-middle w-25 h-25 bg-success rounded-circle shadow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 25. Text Truncate */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">25. Truncado de Texto</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Evitar que textos largos rompan el layout.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> text-truncate, user-select-none</p>
                </div>
                <div className="card-body d-flex flex-column justify-content-center bg-dots m-3 rounded-3 px-4">
                  <div className="bg-white p-3 rounded shadow-sm border w-100">
                    <p className="text-truncate mb-2 fw-bold text-primary">
                      Este es un texto muy largo que será cortado con puntos suspensivos porque excede el ancho.
                    </p>
                    <p className="user-select-none mb-0 text-muted small">
                      Este texto no puede ser seleccionado con el mouse (user-select-none).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 26. Borders */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">26. Bordes Personalizados</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Decorar tarjetas o contenedores.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> border-end, border-3, border-primary</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 gap-3">
                  <div className="bg-white p-3 rounded shadow-sm border-start border-primary border-4 w-100 fw-bold">
                    Borde Izquierdo Grueso
                  </div>
                </div>
              </div>
            </div>

            {/* 27. Background Gradients */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">27. Background Gradients</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Fondos con degradado sutil nativo.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> bg-gradient</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 gap-2">
                  <div className="p-4 bg-primary bg-gradient text-white rounded shadow fw-bold">Primario</div>
                  <div className="p-4 bg-dark bg-gradient text-white rounded shadow fw-bold">Oscuro</div>
                </div>
              </div>
            </div>

            {/* 28. Grid System */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">28. Grid System</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> El núcleo del diseño responsivo de BS.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> row, col-4, col-8</p>
                </div>
                <div className="card-body flex-column d-flex align-items-center justify-content-center bg-dots m-3 rounded-3">
                  <div className="container-fluid p-0 w-100 text-center text-white small fw-bold">
                    <div className="row g-2 mb-2">
                      <div className="col-4"><div className="bg-primary p-2 rounded shadow-sm">col-4</div></div>
                      <div className="col-8"><div className="bg-info text-dark p-2 rounded shadow-sm">col-8</div></div>
                    </div>
                    <div className="row g-2">
                      <div className="col-6"><div className="bg-secondary p-2 rounded shadow-sm">col-6</div></div>
                      <div className="col-6"><div className="bg-dark p-2 rounded shadow-sm">col-6</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 29. Breadcrumb & Pagination */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">29. Navegación Extra</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Rutas de usuario y paginación de tablas.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> breadcrumb, pagination</p>
                </div>
                <div className="card-body d-flex flex-column align-items-center justify-content-center bg-dots m-3 rounded-3 gap-2">
                  <nav aria-label="breadcrumb" className="bg-white px-3 py-2 rounded border shadow-sm w-100">
                    <ol className="breadcrumb mb-0 small">
                      <li className="breadcrumb-item"><a href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">App</li>
                    </ol>
                  </nav>
                  <nav aria-label="Page navigation" className="w-100 d-flex justify-content-center mt-2">
                    <ul className="pagination pagination-sm mb-0 shadow-sm">
                      <li className="page-item disabled"><a className="page-link" href="#" onClick={(e) => e.preventDefault()}>Ant</a></li>
                      <li className="page-item active"><a className="page-link" href="#" onClick={(e) => e.preventDefault()}>1</a></li>
                      <li className="page-item"><a className="page-link" href="#" onClick={(e) => e.preventDefault()}>2</a></li>
                      <li className="page-item"><a className="page-link" href="#" onClick={(e) => e.preventDefault()}>Sig</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* 30. Bootstrap Icons */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                  <h3 className="h6 fw-bold text-dark mb-0">30. Bootstrap Icons</h3>
                  <p className="text-muted small mt-1 mb-0"><strong className="text-primary">Uso:</strong> Iconografía oficial SVG integrada.</p>
                  <p className="text-muted small mt-0 mb-0"><strong className="text-info">Clases:</strong> bi, bi-robot, fs-1</p>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center bg-dots m-3 rounded-3 gap-4">
                  <i className="bi bi-robot fs-1 text-primary drop-shadow"></i>
                  <i className="bi bi-rocket-takeoff-fill fs-1 text-danger drop-shadow"></i>
                  <i className="bi bi-code-slash fs-1 text-dark drop-shadow"></i>
                </div>
              </div>
            </div>

          

          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-4 border-top mt-auto">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-secondary small mb-3 mb-md-0">
            &copy; {currentYear} <span className="fw-bold text-dark">Angel Salguero Dev.</span> Construido con Vite + React + Bootstrap 5.3
          </div>
          <div className="d-flex gap-4 small fw-bold">
            <a href="https://www.salguero-dev.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none border-bottom border-secondary border-opacity-25 pb-1">Volver al Portafolio</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-secondary text-decoration-none border-bottom border-secondary border-opacity-25 pb-1">GitHub</a>
          </div>
        </div>
      </footer>

      {/* --- ESTILOS GLOBALES AUXILIARES --- */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Patrón de puntos para el lienzo de los componentes */
        .bg-dots {
          background-color: #f8f9fa;
          background-image: radial-gradient(#dee2e6 1px, transparent 1px);
          background-size: 14px 14px;
        }
        /* Efecto hover elegante para las tarjetas principales */
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
        }
        /* Sombras para textos/iconos */
        .drop-shadow {
          filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.2));
        }
      `}} />
    </div>
  )
}