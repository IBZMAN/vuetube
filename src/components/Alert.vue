<template id="delete">
  <div>
    <swal-title> Save changes to "Untitled 1" before closing? </swal-title>
    <swal-icon type="warning" color="red"></swal-icon>
    <swal-button type="confirm"> Save As </swal-button>
    <swal-button type="cancel"> Cancel </swal-button>
    <swal-button type="deny"> Close without Saving </swal-button>
    <swal-param name="allowEscapeKey" value="false" />
    <swal-param name="customClass" value='{ "popup": "my-popup" }' />
    <swal-function-param name="didOpen" value="popup => console.log(popup)" />
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "AlertComponent",
  methods: {
    fire() {
      Swal.fire({
        template: "#my-template",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>

<style></style>
