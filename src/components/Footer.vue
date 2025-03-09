<template>
    <footer class="bg-[#2e3bb0] text-white py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <!-- About Us -->
                <div>
                    <h2 class="text-lg font-semibold mb-4">About Us</h2>
                    <p class="opacity-80 leading-relaxed">
                        We provide high-quality rentals at affordable prices. From gadgets to storage solutions, we make renting easy and hassle-free.
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul class="space-y-2">
                        <li>
                            <RouterLink
                                to="/" class="hover:text-[#ffc44d] transition"> Home
                            </RouterLink>
                        </li>
                        <li> 
                            <RouterLink
                                to="/rentals" class="hover:text-[#ffc44d] transition"> Browse Rentals
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/faqs" class="hover:text-[#ffc44d] transition"> FAQs
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/about-us" class="hover:text-[#ffc44d] transition"> About Us
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Social Media -->
                <div>
                    <h2 class="text-lg font-semibold mb-4">Follow Us</h2>
                    <ul class="space-y-2">
                        <li>
                            <a href="https://www.facebook.com/people/Rent-My-Gear-2600/100083677266038/" target="_blank" class="hover:text-[#ffc44d] transition">
                                <i class="fa-brands fa-facebook pr-3"></i>Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" class="hover:text-[#ffc44d] transition">
                                <i class="fa-brands fa-instagram pr-3"></i>Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" class="hover:text-[#ffc44d] transition">
                                <i class="fa-solid fa-globe pr-3"></i>Our Website
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Location -->
                <div>
                    <h2 class="text-lg font-semibold mb-4">Our Location</h2>
                    <p class="opacity-80">Baguio City, Philippines</p>
                    <a href="https://maps.app.goo.gl/DSWU2p2nzZkuvES18" target="_blank"
                       class="mt-2 inline-block text-[#ffc44d] hover:underline">
                        View on Google Maps
                    </a>
                </div>
            </div>

            <!-- Bottom Copyright -->
            <div class="border-t border-white mt-12 pt-6 text-center opacity-80 text-sm">
                © {{ currentYear }} Rent My Gear. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>
