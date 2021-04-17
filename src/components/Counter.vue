<template>
  <div>
    <div v-if="loaded">
      <section
        class="text-3xl flex justify-center content-center flex-col mx-auto text-center"
      >
        <Wait v-if="!expired" />
      </section>
      <section class="flex text-6xl justify-center content-center">
        <div class="days mr-2 relative">
          {{ displayDays }}
          <div class="label text-sm absolute bottom-0">days</div>
        </div>
        <span class="leading-snug">:</span>

        <div class="hours mx-2 relative">
          {{ displayHours }}
          <div class="label text-sm absolute bottom-0">hours</div>
        </div>
        <span class="leading-snug">:</span>

        <div class="minutes mx-2 relative">
          {{ displayMinutes }}
          <div class="label text-sm absolute bottom-0">minutes</div>
        </div>
        <span class="leading-snug">:</span>

        <div class="seconds ml-2 relative">
          {{ displaySeconds }}
          <div class="label text-sm absolute bottom-0">seconds</div>
        </div>
      </section>
    </div>

    <div v-if="!loaded">
      <Message v-if="expired" />

      <div
        class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
      >
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="@/assets/hbd.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">WE LOVE ❤ U</div>
          <p class="text-gray-500">AUN QUEDA UNA SORPRESA</p>
          <a href="/happy"> PARA VER DALE AQUI </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wait from "@/components/Wait.vue";
import Message from "./Message.vue";
export default {
  components: {
    Wait,
    Message,
  },
  name: "Counter",
  props: ["year", "month", "day", "minute", "hour", "second", "millisecond"],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
    expired: false,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },

    end() {
      return new Date(
        this.year,
        this.month,
        this.day,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        // const end = new Date(2021, 3, 17, 16, 30, 10, 10);
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          this.loaded = false;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.seconds {
  max-width: 60px;
}
</style>