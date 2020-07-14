<template>
  <section class="main">
    <div class="padding-top grey-color">
      <div class="container inner-padding-top">
        <div class="row">
          <Title>
            <template slot="title">Latest Backend Dev. Careers</template>
            <template slot="subtitle"
              >Want your job listed here? Why not submit a post to the job
              board?</template
            >
          </Title>
        </div>
        <div class="row mt-5">
          <div class="card-group">
            <div class="row">
              <div class="col-md-8">
                <Job />
                <Job />
                <Job />
              </div>

              <div class="col-md-4 mt-3">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12-col-xs-12 text-center mb-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination" style="justify-content: space-evenly;">
          <div class="prev">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
          </div>
          <li class="page-item active">
            <a class="page-link" href="job.html">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="page-two.html">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="page-three.html">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="page-four.html">4</a>
          </li>
          <div class="next">
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
