<template>
  <div>
    <Title />
    <div
      class="
        p-6
        max-w-sm
        mx-auto
        bg-gradient-to-r from-green-400 to-blue-500
        rounded-xl
        shadow-lg
        flex
        items-center
        space-x-4
      "
    >
      <div class="flex-shrink-0">
        <!-- <img class="h-12 w-12" src="@/assets/hbd.png" alt="ChitChat Logo" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fill-rule="evenodd"
            d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div>
        <div v-if="expired">
          <div class="text-l font-medium text-black">TXT</div>
          <p class="text-gray-500">SOME TEXT HERE TILL TEH END</p>
        </div>

        <div v-if="loaded">
          <section class="flex text-xl justify-center content-center">
            <div class="days mx-4 relative">
              {{ displayDays }}
              <div class="label text-sm absolute bottom-30">days</div>
            </div>
            <span>:</span>

            <div class="hours mx-4 relative">
              {{ displayHours }}
              <div class="label text-sm absolute bottom-30">hours</div>
            </div>
            <span>:</span>

            <div class="minutes mx-4 relative">
              {{ displayMinutes }}
              <div class="label text-sm absolute bottom-30">min</div>
            </div>
            <span>:</span>

            <div class="seconds mx-4 relative">
              {{ displaySeconds }}
              <div class="label text-sm absolute bottom-30">seconds</div>
            </div>
          </section>
        </div>
        <div v-if="!loaded"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  components: {
    Title,
  },
  name: "Pop",
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