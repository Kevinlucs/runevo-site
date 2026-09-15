(() => {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const menuToggle = header.querySelector("[data-menu-toggle]");
  const closeControls = header.querySelectorAll("[data-menu-close]");
  const mobile = window.matchMedia("(max-width: 991px)");
  let triggerBeforeOpen = null;

  const setMenuOpen = (open) => {
    header.classList.toggle("menu-is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-is-open", open);
    if (open) {
      triggerBeforeOpen = document.activeElement;
      header.querySelector(".runna-nav-mobile-close").focus();
    } else if (triggerBeforeOpen instanceof HTMLElement) {
      triggerBeforeOpen.focus();
    }
  };

  menuToggle.addEventListener("click", () => setMenuOpen(true));
  closeControls.forEach((control) => control.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (header.classList.contains("menu-is-open")) setMenuOpen(false);
    }
  });

  header.querySelectorAll(".runna-nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobile.matches) setMenuOpen(false);
    });
  });

  mobile.addEventListener("change", () => {
    if (!mobile.matches) setMenuOpen(false);
  });

  const coachTrack = document.querySelector("[data-coach-track]");
  const coachPrev = document.querySelector("[data-coach-prev]");
  const coachNext = document.querySelector("[data-coach-next]");
  if (coachTrack && coachPrev && coachNext) {
    const moveCoach = (direction) => {
      const card = coachTrack.querySelector(".coach-card");
      const gap = Number.parseFloat(getComputedStyle(coachTrack).columnGap) || 0;
      coachTrack.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || coachTrack.clientWidth) + gap), behavior: "smooth" });
    };
    coachPrev.addEventListener("click", () => moveCoach(-1));
    coachNext.addEventListener("click", () => moveCoach(1));
  }

  const newsletterForm = document.querySelector("[data-newsletter-form]");
  const feedback = document.querySelector("[data-form-feedback]");
  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (feedback) feedback.textContent = "Obrigado! Você já está na lista.";
    newsletterForm.reset();
  });

  const waitlistForm = document.querySelector("[data-waitlist-form]");
  const waitlistFeedback = document.querySelector("[data-waitlist-feedback]");
  waitlistForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (waitlistFeedback) waitlistFeedback.textContent = "Cadastro confirmado. Você receberá as novidades em primeira mão!";
    waitlistForm.reset();
  });
})();
