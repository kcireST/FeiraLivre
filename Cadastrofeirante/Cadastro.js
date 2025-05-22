    function mostrarFormulario(tipo) {
      document.getElementById("formFeirante").style.display = tipo === 'feirante' ? 'block' : 'none';
      document.getElementById("formUsuario").style.display = tipo === 'usuario' ? 'block' : 'none';
    }

    function validarFeirante() {
      const licenca = document.getElementById("licenca");
      const tipo = document.querySelector('input[name="tipoCadastro"]:checked');
      const numero = document.getElementById("numeroTipo");

      if (!licenca.files.length) {
        alert("Por favor, envie a foto da licença.");
        return false;
      }

      if (!tipo || numero.value.trim() === '') {
        alert("Selecione um tipo de cadastro e informe o número.");
        return false;
      }

      return true;
    }

    function validarUsuario() {
      const email = document.getElementById("emailUsuario");
      const senha = document.getElementById("senhaUsuario");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        alert("Informe um e-mail válido.");
        return false;
      }

      if (senha.value.length < 6) {
        alert("A senha deve conter no mínimo 6 caracteres.");
        return false;
      }

      return true;
    }