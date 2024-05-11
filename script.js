function openNav() {
  document.getElementById("mySidenav").style.bottom = "0";
}

// Function to close the drawer
function closeNav() {
  document.getElementById("mySidenav").style.bottom = "-250px";
}

document.addEventListener('DOMContentLoaded', function () {
    const oneC = document.querySelector('.one-c-i');
    let clicked = false;

    oneC.addEventListener('click', function () {
      const mainImage = document.querySelector('.main-image');
      const secondaryImage = document.querySelector('.secondary-image');

      if (!clicked) {
        // Show second-click image
        secondaryImage.style.opacity = 1;
        mainImage.style.opacity = 0;
        clicked = true;
      } else {
        // Show first-click image
        secondaryImage.style.opacity = 0;
        mainImage.style.opacity = 1;
        clicked = false;
      }
    });
  });


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
























// <div class="flex h-full items-center dark:bg-black-secondary bg-white px-4 sm:px-0" data-testid="playerContainer"><div class="flex-grow-[2] sm:flex-grow flex sm:flex-1 lg:max-w-[50%] sm:max-w-[80%] max-w-[60%] items-center sm:order-1"><div class="sm:ml-4 min-w-[3rem] mt-1.5"><span class="relative block"><span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2745%27%20height=%2745%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img alt="Song Image" data-testid="playerImage" srcset="https://img.wynk.in/unsafe/45x45/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431970855_20231118192527/8903431970855/1700622013604/resources/8903431970855.jpg 1x, https://img.wynk.in/unsafe/45x45/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431970855_20231118192527/8903431970855/1700622013604/resources/8903431970855.jpg 2x" src="https://img.wynk.in/unsafe/45x45/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431970855_20231118192527/8903431970855/1700622013604/resources/8903431970855.jpg" decoding="async" data-nimg="intrinsic" class="rounded-md" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span></span></div><div class="ml-1.5 truncate sm:max-w-[11rem] lg:max-w-[16rem]"><a class="" title="Kudiye Ni Tere (From &quot;Starfish&quot;)" href="/music/song/kudiye-ni-tere-from-starfish/hu_8903431970855_INS182303268"><div data-testid="playerTitle" class="text-wynk-static-black-title font-normal text-sm leading-6 truncate dark:text-wynk-dark-text">Kudiye Ni Tere (From "Starfish")</div><div class="text-wynk-static-black text-xs font-normal leading-5 truncate"><span data-testid="playerSubtitle">Yo Yo Honey Singh - Kudiye Ni Tere (From "Starfish")</span></div></a></div></div><div class="flex-grow text-right flex justify-end sm:flex-1 h-full sm:order-4 items-center"><div class="mr-6 lg:block hidden text-xs text-wynk-grey my-auto sm:order-2" data-testid="playerDuration">0:00 / 04:09</div><div class="bg-playPouse p-[1px] rounded-sm md:order-3 h-[1.375rem] player_btnSoundQuality__6_CkZ"><button class="group dark:bg-black-secondary w-[3.125rem] absolute left-[1px] " title="Sound Quality" data-testid="playerQuality"><ul class="dark:bg-black-secondary group-hover:block group-hover:block player_soundQuality__JoYti"><li class="text-sm dark:text-wynk-dark-gray-hover font-medium static-black-title">Sound Quality</li><li class="player_soundQualityItem__9XcXH dark:hover:bg-wynk-dark-background dark:hover:text-wynk-dark-gray-hover  dark:bg-transparent bg-wynk-gray3 text-wynk-static-black-title hover:bg-wynk-light-background" data-testid="playerQuality_HD"><span class="dark:text-wynk-dark-gray-hover"><div class="gredientTTest text-xss">Login For Free HD Audio</div><span class="dark:text-wynk-dark-text-secondary text-xss font-normal">320/256 kbps</span></span> </li><li class="player_soundQualityItem__9XcXH dark:hover:bg-wynk-dark-background dark:hover:text-wynk-dark-gray-hover  dark:bg-transparent bg-wynk-gray3 text-wynk-static-black-title hover:bg-wynk-light-background" data-testid="playerQuality_High"><span class="dark:text-wynk-dark-gray-hover">High <span class="dark:text-wynk-dark-text-secondary text-xss font-normal">128 kbps</span></span> </li><li class="player_soundQualityItem__9XcXH dark:hover:bg-wynk-dark-background dark:hover:text-wynk-dark-gray-hover  dark:bg-transparent bg-wynk-gray3 text-wynk-static-black-title hover:bg-wynk-light-background" data-testid="playerQuality_Med"><span class="dark:text-wynk-dark-gray-hover">Med <span class="dark:text-wynk-dark-text-secondary text-xss font-normal">64 kbps</span></span> </li><li class="player_soundQualityItem__9XcXH dark:hover:bg-wynk-dark-background dark:hover:text-wynk-dark-gray-hover bg-wynk-dark-background hover:bg-wynk-dark-background text-wynk-dark-gray-hover" data-testid="playerQuality_Auto"><span class="dark:text-wynk-dark-gray-hover">Auto <span class="dark:text-wynk-dark-text-secondary text-xss font-normal"></span></span> <span class="float-right dark:text-wynk-dark-gray-hover"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="1.25rem"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></span></li></ul><span class="gredientTTest">Auto</span></button></div><div class="hidden lg:flex mr-6 group sm:order-4"><div class="relative my-auto flex justify-center volume_volume__vNsGU  dark:after:bg-black-secondary"><i title="Mute" data-testid="playerUnmute" class="icon-vol-full gredientTTest cursor-pointer w-6 h-6 flex justify-center items-center"></i><input type="range" min="0" max="100" class="bottom-[3.875rem] hidden " value="100" style="--min: 0; --max: 100; --val: 100;"></div></div><div class="my-auto md:ml-0 sm:mr-4 mx-2 sm:mx-0 sm:order-5 cursor-pointer"><span class="opacity-70 hover:opacity-100"><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M3.5 7C3.5 6.76794 3.59219 6.54538 3.75628 6.38128C3.92038 6.21719 4.14294 6.125 4.375 6.125H23.625C23.8571 6.125 24.0796 6.21719 24.2437 6.38128C24.4078 6.54538 24.5 6.76794 24.5 7C24.5 7.23206 24.4078 7.45462 24.2437 7.61872C24.0796 7.78281 23.8571 7.875 23.625 7.875H4.375C4.14294 7.875 3.92038 7.78281 3.75628 7.61872C3.59219 7.45462 3.5 7.23206 3.5 7ZM14.875 13.125H4.375C4.14294 13.125 3.92038 13.2172 3.75628 13.3813C3.59219 13.5454 3.5 13.7679 3.5 14C3.5 14.2321 3.59219 14.4546 3.75628 14.6187C3.92038 14.7828 4.14294 14.875 4.375 14.875H14.875C15.1071 14.875 15.3296 14.7828 15.4937 14.6187C15.6578 14.4546 15.75 14.2321 15.75 14C15.75 13.7679 15.6578 13.5454 15.4937 13.3813C15.3296 13.2172 15.1071 13.125 14.875 13.125ZM14.875 20.125H4.375C4.14294 20.125 3.92038 20.2172 3.75628 20.3813C3.59219 20.5454 3.5 20.7679 3.5 21C3.5 21.2321 3.59219 21.4546 3.75628 21.6187C3.92038 21.7828 4.14294 21.875 4.375 21.875H14.875C15.1071 21.875 15.3296 21.7828 15.4937 21.6187C15.6578 21.4546 15.75 21.2321 15.75 21C15.75 20.7679 15.6578 20.5454 15.4937 20.3813C15.3296 20.2172 15.1071 20.125 14.875 20.125ZM26.7138 16.7584L19.7138 12.3834C19.5813 12.3007 19.4292 12.2549 19.2731 12.2507C19.117 12.2466 18.9626 12.2844 18.826 12.36C18.6894 12.4357 18.5756 12.5465 18.4963 12.681C18.4169 12.8156 18.3751 12.9688 18.375 13.125V21.875C18.3751 22.0312 18.4169 22.1844 18.4963 22.319C18.5756 22.4535 18.6894 22.5643 18.826 22.64C18.9626 22.7156 19.117 22.7534 19.2731 22.7493C19.4292 22.7451 19.5813 22.6993 19.7138 22.6166L26.7138 18.2416C26.8394 18.1629 26.943 18.0535 27.0148 17.9238C27.0866 17.7941 27.1243 17.6483 27.1243 17.5C27.1243 17.3517 27.0866 17.2059 27.0148 17.0762C26.943 16.9465 26.8394 16.8371 26.7138 16.7584Z" fill="white"></path></svg></span></span></div><div class=" sm:mr-6 ml-2 mr-4 sm:ml-0 sm:order-1 cursor-pointer"><button class="player_ripple__G4c1o"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="animate-bounce duration-700 text-wynk-gray10 w-[14px] h-[14px] mt-1"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button></div></div><div class="text-center flex items-center justify-center sm:flex-1 sm:order-2"><div class="sm:flex hidden"><i class="icon-ic_global_shuffle_dark text-wynk-grey cursor-pointer" title="Shuffle" data-testid="playerShuffle"></i></div><div class="flex items-center sm:mx-9"><i class="mr-2 icon-ic_global_prevsong_dark text-wynk-grey hidden cursor-pointer sm:block" title="Previous" data-testid="playerPrev"></i><i title="-15" class="icon-ic_back text-wynk-grey hover:text-wynk-static-black-title hidden cursor-pointer dark:hover:text-wynk-dark-gray-hover " data-testid="playerSeekm15"></i><button data-testid="playerPlay" class="w-8 h-8 flex justify-center items-center" title="Play"><span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="13" fill="url(#paint0_linear_3600_80)"></circle><path d="M17.5571 12.3414L10.6345 8.11574C10.5192 8.04266 10.386 8.00267 10.2495 8.00013C10.113 7.99759 9.97847 8.03259 9.86051 8.10131C9.74082 8.16699 9.64103 8.26371 9.57166 8.3813C9.50229 8.49889 9.4659 8.63301 9.46631 8.76954V17.2305C9.4659 17.367 9.50229 17.5011 9.57166 17.6187C9.64103 17.7363 9.74082 17.833 9.86051 17.8987C9.97847 17.9674 10.113 18.0024 10.2495 17.9999C10.386 17.9973 10.5192 17.9573 10.6345 17.8843L17.5571 13.6586C17.6705 13.5902 17.7644 13.4936 17.8295 13.3782C17.8947 13.2628 17.9289 13.1325 17.9289 13C17.9289 12.8675 17.8947 12.7372 17.8295 12.6218C17.7644 12.5064 17.6705 12.4098 17.5571 12.3414V12.3414Z" fill="#F5F5F5"></path><defs><linearGradient id="paint0_linear_3600_80" x1="9.62963" y1="-4.40177e-08" x2="14.95" y2="26.65" gradientUnits="userSpaceOnUse"><stop stop-color="#ff8d76"></stop><stop offset="1" stop-color="#ff0c55"></stop></linearGradient></defs></svg></span></button><i title="+15" class="icon-ic_forward text-wynk-grey hover:text-wynk-static-black-title hidden cursor-pointer dark:hover:text-wynk-dark-gray-hover " data-testid="playerSeekm15"></i><i class="ml-2 icon-ic_global_nextsong_dark text-wynk-grey hidden cursor-pointer sm:block" title="Next" data-testid="playerNext"></i></div><div class="hidden sm:block"><i title="Repeat Off" data-testid="playerRepeatOff" class="cursor-pointer text-wynk-grey icon-ic_global_repeat_dark"></i></div></div></div>