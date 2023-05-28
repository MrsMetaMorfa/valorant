<template>
<div class="dashboard_reviews">
  <ReviewsTable :reviews="$store.state.REVIEWS_LIST" :title="'Reviews'" />
</div>
</template>

<script>
import ReviewsTable from "../../components/dashboard/ReviewsTable";

export default {
  name: "DashboardReviews",
  components: { ReviewsTable }
}
</script>

<style lang="scss">

</style>